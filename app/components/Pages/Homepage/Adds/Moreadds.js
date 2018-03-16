import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import Styles from '../../../../constants/Styles/Adds.json';
import Longadd from './_Longadd';
import Smalladd from './_Smalladd';
import Wideradd from './_Wideradd';

const style = StyleSheet.create({
  addsWrap: Styles.adds_wrap,
  addsHeader: Styles.adds_header,
  addsHeaderCertificate: Styles.adds_header_cert,
  addsDescription: Styles.adds_description
});

const Moreadds = () => {
  return (
    <section className={(css(style.addsWrap))+" clearfix"}>
      <Longadd height="600" float="right" bgcover="rgba(0,0,0,0.4)">
        <h2 className={css(style.addsHeader)}>GIFT<br/><span className={css(style.addsHeaderCertificate)}>CERTIFICATE</span></h2>
        <p className={css(style.addsDescription)}>Receive a 10% discount code via email when you<br/>subscribe for our Store offers & updates.</p>
      </Longadd>
    </section>
  )
}

export default Moreadds;