import React from 'react';
import SocialShare from '~/components/socialShare/SocialShare';
import RelatedLinks from '~/components/relatedLinks/RelatedLinks';
import SidebarStyled from './Sidebar.styled';

const Sidebar = () => {
  return (
    <SidebarStyled>
      <SocialShare />
      <RelatedLinks />
    </SidebarStyled>
  );
};

export default Sidebar;
