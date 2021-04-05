import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              <li><a href="" alt="Twitter"><i class="fa fa-twitter"></i></a></li>
              <li><a href="" alt="Telegram"><img src="/images/telegram.png" alt="" /></a></li>
              <li><a href="" alt="Medium"><img src="/images/medium.png" alt="" /></a></li>
            </ul>

            <ul className="copyright">
              <li>&copy; Copyright 2021 BULB Protocol</li>
              
            </ul>
          </div>
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
