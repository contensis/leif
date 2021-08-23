import Loadable from './loadable';

export const HomePage = Loadable(
  () => import(/* webpackChunkName: "home.page" */ '~/pages/Home/Home.page')
);
export const LandingPage = Loadable(
  () =>
    import(
      /* webpackChunkName: "landing.page" */ '~/pages/LandingPage/LandingPage.page'
    )
);
export const ContentPage = Loadable(
  () =>
    import(
      /* webpackChunkName: "content.page" */ '~/pages/ContentPage/ContentPage.page'
    )
);
export const BlogListing = Loadable(
  () =>
    import(
      /* webpackChunkName: "blog-listing.page" */ '~/pages/BlogListing/BlogListing.page'
    )
);
export const BlogPost = Loadable(
  () =>
    import(/* webpackChunkName: "blog.page" */ '~/pages/BlogPost/BlogPost.page')
);
export const ProductPage = Loadable(
  () =>
    import(
      /* webpackChunkName: "product.page" */ '~/pages/ProductPage/ProductPage.page'
    )
);

export const CorePages = {
  404: Loadable(
    () =>
      import(
        /* webpackChunkName: "notfound" */ '~/pages/NotFound/NotFound.page'
      )
  ),
  ZenInfo: Loadable(
    () =>
      import(/* webpackChunkName: "versioninfo.page" */ '~/pages/VersionInfo')
  ),
};
