import React, { Component } from 'react';
import Footer from './footer';
import Header from './header';
import SvgOverlay from './svgOverlay';

import './styles.scss';


class Main extends Component {
  render() {
    return (
      <div className="content-container">
        <Header />
        <SvgOverlay>
          {this.props.children}
        </SvgOverlay>
        <Footer />
      </div>
    );
  }
}

export default Main;
