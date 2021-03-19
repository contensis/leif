import React from 'react';

import { TwitterTweetEmbed } from 'react-twitter-embed';
import TwitterCardStyled from './TwitterCard.styled';
import Icon from '../icon/Icon';

export interface Props {
  tweet: string;
}

const TwitterCard = ({ tweet }: Props) => {
  if (!tweet) return null;
  const regExp = new RegExp('(?<=status/)(.*)');

  const matches = tweet.match(regExp);
  const tweetId = matches && matches[0];

  return (
    <TwitterCardStyled>
      {tweetId && <TwitterTweetEmbed tweetId={tweetId} />}
      {!tweetId && (
        <div className="twitter-card__error">
          <Icon type="twitter" className="twitter-card__icon" color="#12B4D9" />
          <h3 className="twitter-card__error-message">
            Uh oh. Something went wrong!
          </h3>
        </div>
      )}
    </TwitterCardStyled>
  );
};

export default TwitterCard;
