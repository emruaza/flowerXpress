import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

import bannerImg1 from '../../../../assets/images/banner1.jpg';
import bannerImg2 from '../../../../assets/images/banner2.jpg';
import bannerImg3 from '../../../../assets/images/banner3.jpg';

const BANNER_IMG1 = {
  backgroundImage: 'url('+bannerImg1+')',
}

const BANNER_IMG2 = {
  backgroundImage: 'url('+bannerImg2+')',
}

const BANNER_IMG3 = {
  backgroundImage: 'url('+bannerImg3+')',
}

const BANNER_IMG = {
  backgroundPosition: 'center top',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '100%',
  left: '0',
  position: 'absolute',
  top: '0',
  transition: 'all 1s ease',
  width: '100%',
}

const ANNOUNCEMENT_BAR = {
  backgroundColor: 'rgba(83, 58, 132, 0.9)',
  boxSizing: 'border-box',
  color: '#ccabe8',
  fontSize: '15px',
  lineHeight: '60px',
  left: '0',
  paddingLeft: '25px',
  position: 'absolute',
  textAlign: 'center',
  transition: 'all 0.8s ease',
  top: '0',
  width: '100%',
  zIndex: '5'
}

const style = StyleSheet.create({
  bannerImage: BANNER_IMG,
  bannerImage1: BANNER_IMG1,
  bannerImage2: BANNER_IMG2,
  bannerImage3: BANNER_IMG3,
  announcementBar: ANNOUNCEMENT_BAR,
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
        <div className={css(style.bannerImage1, style.bannerImage)} style={{opacity: this.state.img1 ? '0.4' : '0'}}></div>
        <div className={css(style.bannerImage2, style.bannerImage)} style={{opacity: this.state.img2 ? '0.4' : '0'}}></div>
        <div className={css(style.bannerImage3, style.bannerImage)} style={{opacity: this.state.img3 ? '0.4' : '0'}}></div>
      </div>
    )
  }
}

export default Slideshow;