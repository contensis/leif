import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import TwitterCardStyled from './TwitterCard.styled';
import VisuallyHidden from '../visuallyHidden/VisuallyHidden';

import CustomizeTwitterWidget from '../../utils/customTwitterWidget';
import Icon from '../icon/Icon';

export interface Props {
  twitterHandle: string,
}

const TwitterCard = ({ twitterHandle }: Props) => {
  useEffect(() => {
    var options = {
      url: '/static/css/twitter.css',
    };
    CustomizeTwitterWidget(options);
  }, [])
    
  return (
    <>
      <Helmet>
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charSet="utf-8"
        />
      </Helmet>
      <TwitterCardStyled>
        <a
          className="twitter-timeline"
          data-width="399"
          data-height="544"
          data-tweet-limit="1"
          data-chrome="noheader nofooter"
          href={`https://twitter.com/${twitterHandle}?ref_src=twsrc%5Etfw`}
        >
          <VisuallyHidden text={`Tweets by ${twitterHandle}`} />
        </a>
        <Icon type="twitter" className="twitter-card__icon"/>
      </TwitterCardStyled>
    </>
  );
};

export default TwitterCard;
