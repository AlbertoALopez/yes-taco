import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Switch, Link, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Footer from './footer';
import Header from './header';
import SvgOverlay from './svgOverlay';
import Dialog from '../../components/dialog';

// Component needed for nested route
import Upload from '../upload';

import './styles.scss';


const Main = ({ location }) => {
  // Get only current route, otherwise home
  const currentKey = location.pathname.split('/')[1] || '/';
  const timeout = { enter: 10000, exit: 200 };

  return (
    <Grid fluid id="container">
      <Header />
      <Col lg={12} xs={12}>
        <Row center="lg" center="xs">
          <Dialog
            dialogText="What have you got there? Is it a taco? Find out by uploading a picture or pointing us to a URL!"
          >
            <button><Link to="/upload">Link to upload screen</Link></button>
          </Dialog>
        </Row>
      </Col>
      <TransitionGroup className="main-transition-container">
        <CSSTransition key={currentKey} timeout={timeout} classNames="fade" appear>
          <section className="main-transition-container">
            <Switch location={location}>
              <Route path="/upload" component={Upload} />
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
      <SvgOverlay />
      <Footer />
    </Grid>
  );
};

export default withRouter(Main);
