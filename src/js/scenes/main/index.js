import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Footer from './footer';
import Header from './header';
import SvgOverlay from './svgOverlay';

import './styles.scss';


class Main extends Component {
  render() {
    return (
      <Grid fluid id="container">
        <Col lg={12}>
          <Header />
          <SvgOverlay>
            {this.props.children}
          </SvgOverlay>
          <Footer />
        </Col>
      </Grid>
    );
  }
}

export default Main;
