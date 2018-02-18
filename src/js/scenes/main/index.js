import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';

import { Route } from 'react-router-dom';

import Footer from './footer';
import Header from './header';
import SvgOverlay from './svgOverlay';
import Dialog from '../../components/dialog';

// Component needed for nested route
import Upload from '../upload';

import './styles.scss';


class Main extends Component {
  render() {
    return (
      <Grid fluid id="container">
        <Header />
        <Dialog
          dialogText="What have you got there? Is it a taco? Find out by uploading a picture or pointing us to a URL!"
        >
          <button><Link to="/upload">Link to upload screen</Link></button>
        </Dialog>
        <Route path="/upload" component={Upload} />
        <SvgOverlay />
        <Footer />
      </Grid>
    );
  }
}

export default Main;
