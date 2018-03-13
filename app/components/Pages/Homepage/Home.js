import React, {Component} from 'react';
import Layout from "../../Shared/Layout";
import { StyleSheet, css } from 'aphrodite/no-important';

import Banner from './Banner/_Banner';

const BANNER = {
  background: 'red',
  height: '100%',
  position: 'absolute',
  width: '100%',
}

const style = StyleSheet.create({
  bannerArea: BANNER
});

class Homepage extends Component {
  render() {
    return (
      <Layout>
        <Banner />
      </Layout>
    )
  }
}

export default Homepage;