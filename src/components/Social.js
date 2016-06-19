/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import {
  ShareButtons,
  generateShareIcon,
} from 'react-share';

const {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  PinterestShareButton,
} = ShareButtons;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const GooglePlusIcon = generateShareIcon('google');
const LinkedinIcon = generateShareIcon('linkedin');
const PinterestIcon = generateShareIcon('pinterest');

const Social = React.createClass({
  render() {
    const shareUrl = 'http://github.com';
    const title = 'GitHub';

    return (
      <div className="row">
        <ul className="menu social-menu">
          <li className="social"><FacebookShareButton
            url={shareUrl}
            title={title}
            className="Demo__some-network__share-button">
            <FacebookIcon
              size={48}
              round />
          </FacebookShareButton></li>

      <li className="social"><TwitterShareButton
            url={shareUrl}
            title={title}
            className="Demo__some-network__share-button">
            <TwitterIcon
              size={48}
              round />
          </TwitterShareButton></li>

        <li className="social"><GooglePlusShareButton
            url={shareUrl}
            className="Demo__some-network__share-button">
            <GooglePlusIcon
              size={48}
              round />
          </GooglePlusShareButton></li>

        <li className="social"><LinkedinShareButton
            url={shareUrl}
            title={title}
            className="Demo__some-network__share-button">
            <LinkedinIcon
              size={48}
              round />
          </LinkedinShareButton></li>
      </ul>
      </div>
    );
  },
});

export default Social;
