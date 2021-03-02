import React from 'react';
import Header from '../../components/header/Header.container';
import Footer from '../../components/footer/Footer';

import BlogHero from '../../components/genericHero/GenericHero';
import BlogInformation from '../../components/blogInformation/BlogInformation';
import LeadParagraph from '../../components/leadParagraph/LeadParagraph';
import Composer from '../../components/composer/composer';
import CTABanner from '../../components/ctaBanner/CTABanner';
import RelatedContent from '../../components/relatedContent/RelatedContent';
import BlogPostStyled from './blogPost.page.styled';
import TwitterCard from '../../components/twitterCard/TwitterCard';

const BlogPost = ({ entry }) => {
  const ctaObject = {
    label: entry.callToAction.buttonText,
    uri: entry.callToAction.linkToInternalContent && entry.callToAction.linkToInternalContent.sys.uri ? entry.callToAction.linkToInternalContent.sys.uri : (!entry.callToAction.linkToInternalContent || !entry.callToAction.linkToInternalContent.sys.uri) && entry.callToAction.linkToExternalURL ? entry.callToAction.linkToExternalURL : "/",
    type: "primary"
  }

  const relatedContentLinkObject = {
    label: "View all blogs",
    uri: "/blogs",
    type: "secondary"
  }

  const dummyFooterDataArray = [];
  const dummyFooterDataObject = {
    title: 'Title one',
    links: [
      {
        title: 'Link one',
        uri: 'www.google.co.uk',
      },
      {
        title: 'Link two',
        uri: 'www.google.co.uk',
      },
      {
        title: 'Link three',
        uri: 'www.google.co.uk',
      },
      {
        title: 'Link four',
        uri: 'www.google.co.uk',
      },
    ],
  };
  for (let i = 0; dummyFooterDataArray.length < 4; i++){
    dummyFooterDataArray.push(dummyFooterDataObject);
  }

  return (
    <>
      <Header />
      <BlogHero title={entry.entryTitle} image={entry.primaryImage} />
      <main>
        <BlogPostStyled>
          <BlogInformation
            person={entry.author}
            readTime="2"
            date={entry.sys.version.published}
          />
          <LeadParagraph text={entry.leadParagraph} />
          <Composer fields={entry.postBody} />
          <CTABanner
            title={entry.callToAction.title}
            text={entry.callToAction.message}
            image={entry.callToAction.image}
            cta={ctaObject}
          />
          <TwitterCard twitterHandle="AmazingPlants" />
        </BlogPostStyled>
      </main>
      <RelatedContent
        title="Related blogs"
        results={entry.relatedBlogs}
        link={relatedContentLinkObject}
      />
      <Footer data={dummyFooterDataArray} />
    </>
  );
};


export default BlogPost;
