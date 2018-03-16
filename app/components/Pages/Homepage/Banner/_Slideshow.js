import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import Styles from '../../../../constants/Styles/Slideshow.json';
import bannerImg1 from '../../../../assets/images/homepage/banner1.jpg';
import bannerImg2 from '../../../../assets/images/homepage/banner2.jpg';
import bannerImg3 from '../../../../assets/images/homepage/banner3.jpg';

const style = StyleSheet.create({
  bannerImage1: {backgroundImage: 'url('+bannerImg1+')'},
  bannerImage2: {backgroundImage: 'url('+bannerImg2+')'},
  bannerImage3: {backgroundImage: 'url('+bannerImg3+')'},
  bannerImage: Styles.banner_img,
  announcementBar: Styles.announcement_bar
});

class Slideshow extends Component {
  state = {
    img1: true,
    img2: false,
    img3: false,
    announcement: false
  }

  render() {
    setTimeout(() => {
      if(this.state.img1 === true) {
        this.setState({img1: false, img2: true})
      } else if(this.state.img2 === true) {
        this.setState({img2: false, img3: true})
      } else if(this.state.img3 === true) {
        this.setState({img3: false, img1: true})
      }
    }, 7000);

    return (
      <div>
        <p className={css(style.announcementBar)} style={{marginTop: this.state.announcement ? '0' : '-60px'}}>Mother's Day is around the corner. Surprise your mom/mother/inay with flowers!</p>
        <div className={css(style.bannerImage1, style.bannerImage)} style={{opacity: this.state.img1 ? '0.7' : '0'}}></div>
        <div className={css(style.bannerImage2, style.bannerImage)} style={{opacity: this.state.img2 ? '0.7' : '0'}}></div>
        <div className={css(style.bannerImage3, style.bannerImage)} style={{opacity: this.state.img3 ? '0.7' : '0'}}></div>
      </div>
    )
  }
}

export default Slideshow;