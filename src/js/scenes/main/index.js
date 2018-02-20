import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Switch, Link, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { HoverMorphIcon } from 'react-svg-buttons';

import Footer from './footer';
import Header from './header';
import SvgOverlay from './svgOverlay';
import Dialog from '../../components/dialog';

// Components needed for nested routes
import Upload from '../upload';
import Loading from '../loading';
import Results from '../results';

import './styles.scss';


export const Main = ({ location }) => {
  // Get only current route, otherwise home
  const currentKey = location.pathname.split('/')[1] || '/';
  const timeout = { enter: 500, exit: 500 };

  return (
    <Grid fluid id="container">
      <Header />
      <Col lg={12} xs={12}>
        <Row center="xs">
          <div id="dialog-main">
            <Dialog
              dialogText="What have you got there? Is it a taco? Find out by uploading a picture or pointing me to a URL!"
            >
              <Link to="/upload">
                <HoverMorphIcon
                  id="icon-arrow-down"
                  baseType="arrowDown"
                  hoverType="plus"
                  size={30}
                />
              </Link>
            </Dialog>
          </div>
        </Row>
      </Col>
      {/* This is a transition wrapper around a react router switch
          All matching routes will be rendered with the fade in/out animation
      */}
      <TransitionGroup className="main-transition-container">
        <CSSTransition key={currentKey} timeout={timeout} classNames="fade" appear>
          <section className="main-transition-container">
            <Switch location={location}>
              <Route path="/upload" component={Upload} />
              <Route path="/loading" component={Loading} />
              <Route path="/results" component={Results} />
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
