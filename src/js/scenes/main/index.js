import React, { Component } from 'react';
import { Layout } from 'antd';
import Header from './header';
import Footer from './footer';
import SvgOverlay from './svgOverlay';

import './styles.scss';

const { Content } = Layout;


class Main extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Header />
          <Content className="content-container">
            <SvgOverlay>
              {this.props.children}
            </SvgOverlay>
          </Content>
          <Footer />
        </Layout>
      </div>
    );
  }
}

export default Main;
