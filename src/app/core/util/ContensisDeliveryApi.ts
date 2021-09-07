/* eslint-disable max-classes-per-file */
import { Client } from 'contensis-delivery-api';
import { Query, VersionStatus } from 'contensis-core-api';
import { Config } from 'contensis-delivery-api/lib/models';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getClientConfig = (project: string, env?: string) => {
  const config: Config = {
    ...DELIVERY_API_CONFIG,
  }; /* global DELIVERY_API_CONFIG */
  if (project) {
    config.projectId = project;
  }

  if (
    typeof window !== 'undefined' &&
    PROXY_DELIVERY_API /* global PROXY_DELIVERY_API */
  ) {
    // ensure a relative url is used to bypass the need for CORS (separate OPTIONS calls)
    config.rootUrl = '';
    config.responseHandler = {
      404: () => null,
    };
  }
  return config;
};
export * from 'contensis-delivery-api';

// This should only be executed on the client as it relies on the window.
export const GetClientSideDeliveryApiStatus = () => {
  if (typeof window !== 'undefined') {
    const currentHostname = window.location.hostname;
    return GetDeliveryApiStatusFromHostname(currentHostname);
  }
  return null;
};

export const GetDeliveryApiStatusFromHostname = (currentHostname: string) => {
  if (currentHostname.indexOf('localhost') > -1) return 'latest';

  if (currentHostname.endsWith('contensis.cloud')) {
    if (currentHostname.indexOf('preview.') > -1) {
      return 'latest';
    } else {
      return 'published';
    }
  }

  if (currentHostname.endsWith('cloud.contensis.com')) {
    if (currentHostname.indexOf('preview-') > -1) {
      return 'latest';
    } else {
      return 'published';
    }
  }

  return 'published';
};

class DeliveryApi {
  search(query: Query, linkDepth: number, project: string, env?: string) {
    const client = Client.create(getClientConfig(project, env));
    return client.entries.search(query, linkDepth || 1);
  }

  getClient(
    deliveryApiStatus: VersionStatus = 'published',
    project: string,
    env?: string
  ) {
    const baseConfig = getClientConfig(project, env);
    baseConfig.versionStatus = deliveryApiStatus;
    return Client.create(baseConfig);
  }
  getEntry(
    id: string,
    linkDepth = 1,
    deliveryApiStatus: VersionStatus = 'published',
    project: string,
    env?: string
  ) {
    const baseConfig = getClientConfig(project, env);
    baseConfig.versionStatus = deliveryApiStatus;
    const client = Client.create(baseConfig);
    // return client.entries.get(id, linkDepth);
    return client.entries.get({ id, linkDepth });
  }
}

export const deliveryApi = new DeliveryApi();

class CacheNode {
  key: string;
  value: any;
  next: any;
  prev: any;
  constructor(key: string, value: any) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LruCache {
  map: Record<string, { value: any; next: any; prev: any }>;
  head: Record<string, any>;
  tail: Record<string, any>;
  limit: number;
  size: number;
  constructor(limit = 100) {
    this.map = {};
    this.head = {};
    this.tail = {};
    this.limit = limit || 100;
    this.size = 0;
  }

  get(key: string) {
    if (this.map[key]) {
      const value = this.map[key].value;
      const node = new CacheNode(key, value);
      this.remove(key);
      this.setHead(node);
      return value;
    }
  }

  set(key: string, value: any) {
    const node = new CacheNode(key, value);
    if (this.map[key]) {
      this.remove(key);
    } else {
      if (this.size >= this.limit && this.tail !== null) {
        delete this.map[this.tail.key];
        this.size--;
        this.tail = this.tail.prev;
        this.tail.next = null;
      }
    }
    this.setHead(node);
  }

  setHead(node: any) {
    node.next = this.head;
    node.prev = null;
    if (this.head) {
      this.head.prev = node;
    }
    this.head = node;
    if (!this.tail) {
      this.tail = node;
    }
    this.size++;
    this.map[node.key] = node;
  }

  remove(key: string) {
    const node = this.map[key];
    if (node.prev) {
      node.prev.next = node.next;
    } else {
      this.head = node.next;
    }
    if (node.next) {
      node.next.prev = node.prev;
    } else {
      this.tail = node.prev;
    }
    delete this.map[key];
    this.size--;
  }
}

class CachedSearch {
  cache = new LruCache();
  taxonomyLookup = {};

  search(query: Query, linkDepth: number, project: string, env?: string) {
    const client = Client.create(getClientConfig(project, env));
    return this.request(
      project + JSON.stringify(query) + linkDepth.toString(),
      () => client.entries.search(query, linkDepth)
    );
  }

  get(
    id: string,
    linkDepth: number,
    versionStatus: VersionStatus,
    project: string,
    env?: string
  ) {
    const client = Client.create(getClientConfig(project, env));
    client.clientConfig.versionStatus = versionStatus;
    return this.request(id, () => client.entries.get({ id, linkDepth }));
  }

  getContentType(id: string, project: string, env?: string) {
    const client = Client.create(getClientConfig(project, env));
    return this.request(`[CONTENT TYPE] ${id} ${project}`, () =>
      client.contentTypes.get(id)
    );
  }

  request(key: string, execute: any) {
    if (!this.cache.get(key) || typeof window === 'undefined') {
      const promise = execute();
      this.cache.set(key, promise);
      promise.catch(() => {
        this.cache.remove(key);
      });
    }
    return this.cache.get(key);
  }
}

export const cachedSearch = new CachedSearch();
