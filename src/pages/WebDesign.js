import React from 'react';
import { IndexLink, Link } from 'react-router';
import PageHeader from '../components/pageheader';

class WebDesign extends React.Component {
    render() {
            return (
              <div className="page-wrapper">
                <div className="page-header">
                  <div className="row columns">
                  <h1 className="text-center page-title">Web Design</h1>
                    <h5 className="page-sub-title text-center">This is the Web Design page</h5>
                </div>
                </div>

                <div className="row">
                    <h1 className="page-sub-heading">About Us</h1>
                <div className="large-7 columns">

                  <div className="callout small">
                    <dl>
            <dt>Time</dt>
            <dd>The indefinite continued progress of existence and events in the past, present, and future regarded as a whole.</dd>
            <dt>Space</dt>
            <dd>A continuous area or expanse that is free, available, or unoccupied.</dd>
            <dd>The dimensions of height, depth, and width within which all things exist and move.</dd>
          </dl>
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

              </div>

          );
        }
      }
    export default WebDesign;
