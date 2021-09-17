export type Sys = {
  allUris?: string[];
  contentTypeId: string;
  dataFormat: string;
  id: string;
  properties?: {
    width?: number;
    height?: number;
    fileSize?: number;
  };
  version?: {
    publishedBy: string;
    createdBy: string;
    created: string;
    versionNo: string;
    modified: string;
    modifiedBy: string;
    published: string;
  };
  uri: string;
};

export type Asset = {
  entryDescription?: string;
  entryTitle: string;
  sys: Sys;
};

export type ComposerField = { type: string; value: any };

export type Image = {
  altText?: string;
  asset?: Asset;
  caption?: string;
  transformations?: string;
};

export type Entry = {
  [key: string]: any;
  entryTitle: string;
  sys: Sys;
};

export interface Node {
  ancestors: Node[];
  /** The node identifier */
  id: string;
  /** The node's parent identifier */
  parentId: string;
  /** The project identifier, e.g. 'movieDb'.Found in the project overview screen of the management console */
  projectId: string;
  /** The slug of the node, unique within it's containing node, e.g. 'about - us' */
  slug: string;
  /** The node slug display name */
  displayName: string;
  /** The node language */
  language: string;
  /** The path the node is navigable on */
  path: string;
  /** The count of child nodes */
  childCount: number;
  /** If a depth is specified when requesting a node then the children field would include the descendant nodes to the specified depth */
  children: Node[];
  /** The entry associated with the node, if requested */
  entry: Entry;
  /** Whether this node is the canonical node for the entry */
  isCanonical: boolean;
  /** The version number of the node */
  version: {
    versionNo: string;
  };
  /** If the node should be included in menus; Does not stop the node from being navigable. */
  includeInMenu: boolean;
}

export interface NodeOptions {
  /** The optional language for the node. If no value is provided then the project default language is used */
  language?: string;
  /** The depth of descendants to include for the node. The default is 0. This reduces calls to the HTTP service and improves performance */
  depth?: number;
  /** The optional list of fields that will be retrieved if the node has an entry attached to it */
  entryFields?: string[];
  /** The depth at which to resolve the full entry data for a linked entry or asset, with a maximum depth value of 10. The default is 0 */
  entryLinkDepth?: number;
}

export interface NodeGetByIdOptions extends NodeOptions {
  /** The node id */
  id: string;
}

export interface NodeGetByPathOptions extends NodeOptions {
  /** The node path */
  path: string;
  /** When set to true, returns the nearest ancestor up to, but not including, root on the path if the node at the specified path does not exist */
  allowPartialMatch?: boolean;
}

export interface NodeGetChildrenOptions extends Omit<NodeOptions, 'depth'> {
  /** The node id */
  id?: string;
  /** The node object */
  node?: Node;
}
