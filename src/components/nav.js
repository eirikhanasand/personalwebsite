import React, { Component } from 'react';


export default class Nav extends Component {
  render() {
    return (
      <nav>
          <div className="nav-wrapper">
            <a href="/" className="brand-logo">SECRET HOODIE</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="/">HOME</a></li>
              <li><a href="/second">SECOND</a></li>
              <li><a href="/third">THIRD</a></li>
            </ul>
          </div>
        </nav>
    );
  }
}
