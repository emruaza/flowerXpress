import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { Link } from "react-router-dom";

import * as ROUTES from '../../constants/Routes';

let NAVROUTES = [
  ROUTES.Home,
  ROUTES.AboutUs,
  ROUTES.FlowerShop,
  ROUTES.FlowerCare,
  ROUTES.OrderNow,
  ROUTES.ContactUs,
  ROUTES.Promos
];

const NAV_BUTTON = {
  backgroundColor: '#ccc',
  boxSizing: 'border-box',
  cursor: 'pointer',
  display: 'none',
  float: 'right',
  padding: '6px 8px 4px'
}

const NAV_BUTTON_SPAN = {
  backgroundColor: '#555',
  display: 'block',
  height: '4px',
  marginBottom: '4px',
  width: '27px'
}

const NAV_UL = {
  float: 'right',
  paddingBottom: '30px',
  paddingTop: '30px'
}

const NAV_LIST = {
  float: 'left',
  marginRight: '30px'
}

const NAV_PATH = {
  color: '#555',
  fontSize: '15px',
  fontFamily: '"Karma"',
  textTransform: 'uppercase',
  ':hover': {
    color: 'red'
  }
}

const style = StyleSheet.create({
  navButton: NAV_BUTTON,
  navButtonSpan: NAV_BUTTON_SPAN,
  navUL: NAV_UL,
  navUlList: NAV_LIST,
  navLiPath: NAV_PATH
});

const Header = () => {
  return (
    <header id="headerEl">
      <nav className="clearfix">
        <button className={css(style.navButton)}>
          <span className={css(style.navButtonSpan)}></span>
          <span className={css(style.navButtonSpan)}></span>
          <span className={css(style.navButtonSpan)}></span>
        </button>
        <ul className={css(style.navUL)}>
          {NAVROUTES.map((link, i) => <li className={css(style.navUlList)} key={i}><Link to={link.path} className={css(style.navLiPath)}>{link.name}</Link></li>)}
        </ul>
      </nav>
    </header>
  )
}

export default Header;