import loadable from '@loadable/component';

// Props Models
import { RouteComponentProps } from '@zengenti/contensis-react-base';
import { MappedProps as HomePageProps } from '~/pages/Home/Home.d';
import { MappedProps as LandingPageProps } from '~/pages/LandingPage/LandingPage.d';
import { MappedProps as ContentPageProps } from '~/pages/ContentPage/ContentPage.d';
import { MappedProps as BlogListingProps } from '~/pages/BlogListing/BlogListing.d';
import { MappedProps as EventsListingProps } from '~/pages/EventsListing/EventsListing.d';
import { MappedProps as BlogPostProps } from '~/pages/BlogPost/BlogPost.d';
import { MappedProps as EventProps } from '~/pages/Event/Event.d';
import { Props as ProductListingProps } from '~/pages/ProductListing/ProductListing.d';
import { MappedProps as ProductPageProps } from '~/pages/ProductPage/ProductPage.d';

export const HomePage = loadable<RouteComponentProps<HomePageProps>>(
  () => import(/* webpackChunkName: "home.page" */ '~/pages/Home/Home.page')
);
export const LandingPage = loadable<RouteComponentProps<LandingPageProps>>(
  () =>
    import(
      /* webpackChunkName: "landing.page" */ '~/pages/LandingPage/LandingPage.page'
    )
);
export const ContentPage = loadable<RouteComponentProps<ContentPageProps>>(
  () =>
    import(
      /* webpackChunkName: "content.page" */ '~/pages/ContentPage/ContentPage.page'
    )
);
export const SearchPage = loadable<RouteComponentProps>(
  () =>
    import(/* webpackChunkName: "search.page" */ '~/pages/Search/Search.page')
);
export const BlogListing = loadable<RouteComponentProps<BlogListingProps>>(
  () =>
    import(
      /* webpackChunkName: "blog-listing.page" */ '~/pages/BlogListing/BlogListing.page'
    )
);
export const BlogPost = loadable<RouteComponentProps<BlogPostProps>>(
  () =>
    import(/* webpackChunkName: "blog.page" */ '~/pages/BlogPost/BlogPost.page')
);
export const ProductListing = loadable<
  RouteComponentProps<ProductListingProps>
>(
  () =>
    import(
      /* webpackChunkName: "product-listing.page" */ '~/pages/ProductListing/ProductListing.page'
    )
);
export const ProductPage = loadable<RouteComponentProps<ProductPageProps>>(
  () =>
    import(
      /* webpackChunkName: "product.page" */ '~/pages/ProductPage/ProductPage.page'
    )
);
export const BasketPage = loadable<RouteComponentProps>(
  () =>
    import(/* webpackChunkName: "basket.page" */ '~/pages/Basket/Basket.page')
);
export const CheckoutPage = loadable<RouteComponentProps>(
  () =>
    import(
      /* webpackChunkName: "checkout.page" */ '~/pages/Checkout/Checkout.page'
    )
);
// ********************************
// ˅˅ Do not delete these pages ˅˅
export const CorePages = {
  404: loadable<RouteComponentProps>(
    () =>
      import(
        /* webpackChunkName: "notfound" */ '~/pages/NotFound/NotFound.page'
      )
  ),
  ZenInfo: loadable<RouteComponentProps>(
    () =>
      import(/* webpackChunkName: "versioninfo.page" */ '~/pages/VersionInfo')
  ),
};
// ˄˄ Do not delete these pages ˄˄
// ********************************
