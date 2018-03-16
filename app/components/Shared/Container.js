import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

const style = StyleSheet.create({
  container: {
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '1200px',
    width: '100%'
  }
});

const Container = (props) => 
  <div className={css(style.container)}>
    {props.children}
  </div>

export default Container;