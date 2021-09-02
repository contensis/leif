import Loadable from './loadable';

// Props Models
import { MappedProps as HomePageProps } from '~/pages/Home/Home.d';
import { MappedProps as LandingPageProps } from '~/pages/LandingPage/LandingPage.d';
import { MappedProps as ContentPageProps } from '~/pages/ContentPage/ContentPage.d';
import { MappedProps as BlogListingProps } from '~/pages/BlogListing/BlogListing.d';
import { MappedProps as BlogPostProps } from '~/pages/BlogPost/BlogPost.d';
import { Props as ProductListingProps } from '~/pages/ProductListing/ProductListing.d';
import { MappedProps as ProductPageProps } from '~/pages/ProductPage/ProductPage.d';

export const HomePage = Loadable<HomePageProps>(
  () => import(/* webpackChunkName: "home.page" */ '~/pages/Home/Home.page')
);
export const LandingPage = Loadable<LandingPageProps>(
  () =>
    import(
      /* webpackChunkName: "landing.page" */ '~/pages/LandingPage/LandingPage.page'
    )
);
export const ContentPage = Loadable<ContentPageProps>(
  () =>
    import(
      /* webpackChunkName: "content.page" */ '~/pages/ContentPage/ContentPage.page'
    )
);
export const SearchPage = Loadable(
  () =>
    import(/* webpackChunkName: "search.page" */ '~/pages/Search/Search.page')
);
export const BlogListing = Loadable<BlogListingProps>(
  () =>
    import(
      /* webpackChunkName: "blog-listing.page" */ '~/pages/BlogListing/BlogListing.page'
    )
);
export const BlogPost = Loadable<BlogPostProps>(
  () =>
    import(/* webpackChunkName: "blog.page" */ '~/pages/BlogPost/BlogPost.page')
);
export const ProductListing = Loadable<ProductListingProps>(
  () =>
    import(
      /* webpackChunkName: "product-listing.page" */ '~/pages/ProductListing/ProductListing.page'
    )
);
export const ProductPage = Loadable<ProductPageProps>(
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
