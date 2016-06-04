import React from 'react';
import { IndexLink, Link } from 'react-router';


class Home extends React.Component {
    render() {
            return (
              <div className="page-wrapper">
                <div className="site-header fade-in">
                  <div className="row columns">
                  <h1 className="text-center site-title">Reactive Web Designs</h1>
                    <h5 className="page-sub-title text-center">Building Responsive Site</h5>
                </div>
                </div>

                <div className="row">
                    <h1 className="page-sub-heading">Subheading</h1>
                <div className="large-7 columns">

                  <div className="callout small">
          <h5>This is a large callout</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.</p>
          <a href="#">This is a link</a>
        </div>
        </div>


            <div className="large-4 columns">
              <div className="callout small">
                <dl>
        <dt>Time</dt>
        <dd>The indefinite continued progress of existence and events in the past, present, and future regarded as a whole.</dd>
        <dt>Space</dt>
        <dd>A continuous area or expanse that is free, available, or unoccupied.</dd>
        <dd>The dimensions of height, depth, and width within which all things exist and move.</dd>
      </dl>
              </div>
              </div>
                </div>
                <div className="row">
                <div className="large-7 columns">
                  <div className="callout small">
          <h3 className="callout-title">This is a large callout</h3>
          <p className="callout-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.</p>
          <a href="#">This is a link</a>
        </div>
        </div>


            <div className="large-4 columns">
              <div className="callout small">
                <h5>This is a small callout</h5>
                <p>It has an easy to override visual style, and is appropriately subdued.</p>
              </div>
              </div>
                </div>
              </div>

          );
        }
      }

    export default Home;
