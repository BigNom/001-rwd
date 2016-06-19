import React from 'react';
import { IndexLink, Link } from 'react-router';
import Social from '../components/Social';

class SideNav extends React.Component {
    render() {
            return (
              <div className="off-canvas-wrapper">
                  <div className="off-canvas-wrapper-inner" data-off-canvas-wrapper>
                      <div className="off-canvas position-left" id="mainMenu" data-off-canvas data-position="left">
                          <h3 className="text-center">Navigation</h3>
                          <ul className="menu vertical" data-drilldown>
                              <li><a href="#">Home</a></li>
                              <li><a href="#">About Us</a></li>
                              <li><a href="#">Services</a></li>
                              <li><a href="#">Contact Us</a></li>
                          </ul>
                      </div>


                      <div className="off-canvas-content" data-off-canvas-content>
                        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt mollit anim id est laborum.</div>
                          <div className="header-content">
      <div className="row">
          <div className="small-4 medium-4 columns">
              <button type="button" class="button" data-toggle="offCanvasLeft">Open Menu</button>
          </div>
      </div>
  </div>
                          </div>

                      </div>

                  </div>

            );
        }
    }
    export default SideNav;
