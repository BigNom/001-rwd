import React from 'react';
import { IndexLink, Link } from 'react-router';

class Titlebar extends React.Component {
    render() {
            return (
                <div className="title-bar">
      <div className="title-bar-left">
        <button class="menu-icon" type="button"></button>
        <span class="title-bar-title">ReactiveWebDesigns</span>
    </div>
  </div>
            );
        }
    }
    export default Titlebar;
