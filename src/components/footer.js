import React, { Component } from 'react';


export default class Footer extends Component {
  render() {
    return (
      <footer className="page-footer">
                <div className="container">
                  <div className="row">
                    <div className="col l6 s12">
                      <h5 className="white-text">Thanks for visiting my personal website!</h5>
                      <p className="grey-text text-lighten-4">Sometime I might put my social media here.</p>
                    </div>
                    <div className="col l4 offset-l2 s12">
                      <h5 className="white-text">Links</h5>
                      <ul>
                        <li><a className="grey-text text-lighten-3" href="#!">DISCORD</a></li>
                        <li><a className="grey-text text-lighten-3" href="https://instagram.com/eirikhanasand">INSTAGRAM</a></li>
                        <li><a className="grey-text text-lighten-3" href="https://www.linkedin.com/in/eirik-hanasand-958a02202/">LINKED IN</a></li>
                        <li><a className="grey-text text-lighten-3" href="#!">EMAIL</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="footer-copyright">
                  <div className="container">
                  © 2022 Eirik Hanasand. All rights reserved.
                  <a className="grey-text text-lighten-4 right" href="#!">WIP bottom right</a>
                  </div>
                </div>
              </footer>
    );
  }
}
