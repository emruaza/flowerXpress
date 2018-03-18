import React, {Component} from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import Styles from '../../../../constants/Styles/Adds.json';
import Longadd from './_Longadd';
import Smalladd from './_Smalladd';
import Wideradd from './_Wideradd';
import Input, {TEXT_INPUT} from '../../../Forms/Input';

const style = StyleSheet.create({
  addsWrap: Styles.adds_wrap,
  addsHeader: Styles.adds_header,
  addsHeaderCertificate: Styles.adds_header_cert,
  addsDescription: Styles.adds_description
});

class Moreadds extends Component {
  constructor() {
    super();

    this.state = {
      subscribe_email: ''
    }
  }

  handleChange = (value) => {
    this.setState(value)

    console.log(value)
  };

  render() {
    return (
      <section className={(css(style.addsWrap))+" clearfix"}>
        <Longadd height="600" float="right" bgcover="rgba(0,0,0,0.4)">
          <h2 className={css(style.addsHeader)}>GIFT<br/><span className={css(style.addsHeaderCertificate)}>CERTIFICATE</span></h2>
          <p className={css(style.addsDescription)}>Receive a 10% discount code via email when you<br/>subscribe for our Store offers & updates.</p>
          <Input variety={TEXT_INPUT} display="inline-block" width="300px" type="text" name="subscribe_email" value={this.state.subscribe_email} onChange={this.handleChange} placeholder="Enter your email" />
        </Longadd>
      </section>
    )
  }
}

export default Moreadds;