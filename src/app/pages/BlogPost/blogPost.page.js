import React from 'react';
import Header from '~/components/header/Header'
import Footer from '~/components/footer/Footer'

import BlogHero from '~/components/genericHero/GenericHero'
import BlogInformation from '~/components/blogInformation/BlogInformation'
import LeadParagraph from '~/components/leadParagraph/LeadParagraph'
import Composer from '~/components/composer/composer'
const BlogPost = ({ entry }) => (
  <>
    <Header />
    <BlogHero title={entry.entryTitle} image={entry.primaryImage} />
    <BlogInformation person={entry.author} readTime="2mins" date={entry.sys.version.published} />
    <LeadParagraph text={entry.leadParagraph} />
    <Composer fields={entry.postBody} />
    <Footer />
  </>
);


export default BlogPost;
