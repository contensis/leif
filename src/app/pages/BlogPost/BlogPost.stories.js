import React from 'react';
import BlogPost from './blogPost.page';

export default {
  title: 'Blog/Page/BlogPost',
  component: BlogPost,
}

const Template = () => {

  const entry = {

  }
    
  return <BlogPost entry={entry} />;
};

export const Primary = Template.bind({});
