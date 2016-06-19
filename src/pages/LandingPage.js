import React from 'react';
import { IndexLink, Link } from 'react-router';
import PageHeader from '../components/pageheader';

class LandingPage extends React.Component {
  render() {
    return (

        <div className="container demo-1">
          <div className="content">
            <div id="large-header" className="large-header">
              <canvas id="demo-canvas"></canvas>
              <h1 className="main-title">Reactive <span className="thin">Web Designs</span></h1>
            </div>
          </div>
        </div>
    );
  }
}

export default LandingPage;
