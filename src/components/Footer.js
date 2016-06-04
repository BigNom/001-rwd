 import React from 'react';
import { IndexLink, Link } from 'react-router';

const Footer = React.createClass({
  render() {
          return (
            <div className="footer-wrapper">
              <div className="row">
                <div className="medium-4 large-4 columns">
                  <ul className="menu footer">
                      <li><a>Home</a></li>
                      <li><a>Home</a></li>
                      <li><a>Home</a></li>
                      <li><a>Home</a></li>
                      
                      </ul>
                </div>
                <div className="medium-4 large-4 columns">
                  <ul className="menu footer">
                      <li><a>Contact</a></li>
                      </ul>
                </div>
                <div className="medium-4 large-4 columns">
                  <ul className="menu footer">
                      <li><a>About</a></li>
                  </ul>
                </div>
              </div>
                <p className="copyright text-center"><small>Copyright © 2009 Gordon Freeman</small></p>
              </div>

    );
  }
});

    export default Footer;
