import React, {Component} from 'react';
import Layout from "../../Shared/Layout";
import { StyleSheet, css } from 'aphrodite/no-important';
import Container from '../../Shared/Container';
import Banner from './Banner/Banner';
import Categories from './Categories/Categories';
import Moreadds from './Adds/Moreadds';

class Homepage extends Component {
  render() {
    return (
      <Layout>
        <Banner />
        <Categories />
        <Container>
          <Moreadds />
        </Container>
      </Layout>
    )
  }
}

export default Homepage;