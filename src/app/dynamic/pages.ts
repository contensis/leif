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
export const SearchPage = Loadable(
  () =>
    import(/* webpackChunkName: "search.page" */ '~/pages/Search/Search.page')
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
export const ProductListing = Loadable(
  () =>
    import(
      /* webpackChunkName: "product-listing.page" */ '~/pages/ProductListing/ProductListing.page'
    )
);
export const ProductPage = Loadable(
  () =>
    import(
      /* webpackChunkName: "product.page" */ '~/pages/ProductPage/ProductPage.page'
    )
);
export const BasketPage = Loadable(
  () =>
    import(/* webpackChunkName: "basket.page" */ '~/pages/Basket/Basket.page')
);
export const CheckoutPage = Loadable(
  () =>
    import(
      /* webpackChunkName: "checkout.page" */ '~/pages/Checkout/Checkout.page'
    )
);
// ********************************
// ˅˅ Do not delete these pages ˅˅
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
// ˄˄ Do not delete these pages ˄˄
// ********************************
