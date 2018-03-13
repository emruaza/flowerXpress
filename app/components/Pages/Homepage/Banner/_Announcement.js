import React, {Component} from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { Link } from "react-router-dom";

import { OrderNow } from '../../../../constants/Routes';

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

const ORDERNOW_LINK = {
  color: '#fff',
  display: 'inline-block',
  fontSize: '14px',
  lineHeight: '20px',
  marginLeft: '5px',
  textDecoration: 'underline',
}

const CLOSE_BTN = {
  backgroundColor: '#999',
  borderRadius: '50%',
  color: '#fff',
  cursor: 'pointer',
  display: 'inline-block',
  float: 'right',
  height: '25px',
  lineHeight: '25px',
  marginTop: '15px',
  marginRight: '20px',
  width: '25px'
}

const style = StyleSheet.create({
  announcementBar: ANNOUNCEMENT_BAR,
  orderNowLink: ORDERNOW_LINK,
  closeBtn: CLOSE_BTN
});

class Announcement extends Component {
  state = {
    announcement: false
  }

  componentDidMount() {
    setTimeout(() => {this.setState({announcement: true})}, 600);
  }

  closeAnnouncement() {
    console.log('click')
    this.setState({announcement: false});
  }


  render() {
    if (this.state.announcement === true) {
      setTimeout(() => {this.setState({announcement: false})}, 15000)
    }

    return (
      <p className={css(style.announcementBar)} style={{marginTop: this.state.announcement ? '0' : '-60px'}}>
        Mother's Day is around the corner. Surprise your mom/mother/inay with flowers!
        <Link to={OrderNow.path} className={css(style.orderNowLink)}>{OrderNow.name}</Link>
        <button className={css(style.closeBtn)} onClick={this.closeAnnouncement}><i className='fa fa-times'></i></button>
      </p>
    )
  }
}

export default Announcement;