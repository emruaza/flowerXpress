import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import SlideShow from './_Slideshow';
import Announcement from './_Announcement';
import Styles from '../../../../constants/Styles/Banner.json';

const style = StyleSheet.create({
  bannerArea: Styles.banner,
  headerText: Styles.header_text,
});

const Banner = () => {
  return (
    <section className={(css(style.bannerArea))+" clearfix"}>
      <h1 className={css(style.headerText)}>Express your thoughts<br/>and well-wishes.</h1>
      <Announcement />
      <SlideShow />
    </section>
  )
} 

export default Banner;