import React from 'react';

// Components
import BlogHero from '../../components/genericHero/GenericHero';
import BlogInformation from '../../components/blogInformation/BlogInformation';
import LeadParagraph from '../../components/leadParagraph/LeadParagraph';
import Composer from '../../components/composer/Composer';
import CTABanner from '../../components/ctaBanner/CTABanner';
import RelatedContent from '../../components/relatedContent/RelatedContent';
// import TwitterCard from '../../components/twitterCard/TwitterCard';

// Layout
import MainLayout from '../../layout/MainLayout';
import Region from '~/layout/Region';

interface Props {
  entry: any;
}

const BlogPost = ({ entry }: Props) => {
  const ctaObject = {
    label: entry.callToAction.buttonText,
    uri:
      entry.callToAction.linkToInternalContent &&
      entry.callToAction.linkToInternalContent.sys.uri
        ? entry.callToAction.linkToInternalContent.sys.uri
        : (!entry.callToAction.linkToInternalContent ||
            !entry.callToAction.linkToInternalContent.sys.uri) &&
          entry.callToAction.linkToExternalURL
        ? entry.callToAction.linkToExternalURL
        : '/',
    type: 'primary',
  };

  const relatedContentLinkObject = {
    label: 'View all blogs',
    uri: '/blogs',
    type: 'secondary',
  };

  return (
    <MainLayout>
      <Region width="large" margin="none">
        <BlogHero title={entry.entryTitle} image={entry.primaryImage} />
      </Region>
      <Region width="small" margin="default">
        <BlogInformation
          person={entry.author}
          readTime="2"
          date={entry.sys.version.published}
        />
      </Region>
      <Region width="small" margin="default">
        <LeadParagraph text={entry.leadParagraph} />
      </Region>
      <Composer fields={entry.postBody} />
      <Region width="small" margin="large">
        <CTABanner
          title={entry.callToAction.title}
          text={entry.callToAction.message}
          image={entry.callToAction.image}
          cta={ctaObject}
        />
      </Region>
      <Region width="default" margin="default">
        <RelatedContent
          title="Related blogs"
          results={entry.relatedBlogs}
          link={relatedContentLinkObject}
        />
      </Region>
    </MainLayout>
  );
};

export default BlogPost;
