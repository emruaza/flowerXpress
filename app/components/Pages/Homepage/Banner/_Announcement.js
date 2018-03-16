import React, {Component} from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { Link } from "react-router-dom";

import { OrderNow } from '../../../../constants/Routes';
import Styles from '../../../../constants/Styles/Announcement.json';

const style = StyleSheet.create({
  announcementBar: Styles.announcement,
  orderNowLink: Styles.order_link,
  closeBtn: Styles.close_btn
});

class Announcement extends Component {
  constructor() {
    super();

    this.state = {
      announcement: false
    }

    this.closeAnnouncement = this.closeAnnouncement.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {this.setState({announcement: true})}, 600);
  }

  closeAnnouncement() {
    this.setState({announcement: false})
  }

  render() {
    if (this.state.announcement === true) {
      setTimeout(() => {this.setState({announcement: false})}, 15000)
    }

    return (
      <p className={css(style.announcementBar)} style={{marginBottom: this.state.announcement ? '0' : '-60px'}}>
        Mother's Day is around the corner. Surprise your mom/mother/inay with flowers!
        <Link to={OrderNow.path} className={css(style.orderNowLink)}>{OrderNow.name}</Link>
        <button className={css(style.closeBtn)} onClick={this.closeAnnouncement}><i className='fa fa-times'></i></button>
      </p>
    )
  }
}

export default Announcement;