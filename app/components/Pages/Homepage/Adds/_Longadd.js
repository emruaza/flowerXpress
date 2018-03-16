import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

import bgImg from '../../../../assets/images/homepage/addImage_long.jpg';

const Longadd = (props) => {
  const style = StyleSheet.create({
    container: {
      "background": "#fff url("+bgImg+") no-repeat center center / cover",
      "float": props.float,
      "height": props.height+"px",
      "width": "48%"
    },
    contentWrap: {
      "backgroundColor": props.bgcover,
      "color": "#fff",
      "height": "87%",
      "marginLeft": "auto",
      "marginRight": "auto",
      "marginTop": "7%",
      "textAlign": "center",
      "width": "87%"
    }
  });

  return (
    <section className={css(style.container)}>
      <div className={(css(style.contentWrap))+" clearfix"}>
        {props.children}
      </div>
    </section>
  )
}

export default Longadd;