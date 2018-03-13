import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

import SlideShow from './_Slideshow';
import Announcement from './_Announcement';

const windHeight = window.innerHeight-85;

const BANNER = {
  backgroundColor: '#000',
  height: windHeight+'px',
  position: 'relative',
  width: '100%',
}

const HEADER_TEXT = {
  color: "#fff",
  font: 'italic 400 65px/76px "Lora"',
  marginLeft: '110px',
  marginTop: ((windHeight/2)/2)+'px',
  position: 'relative',
  zIndex: '9'
}

const style = StyleSheet.create({
  bannerArea: BANNER,
  headerText: HEADER_TEXT,
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