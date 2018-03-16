import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { Link } from "react-router-dom";
import Container from './Container';
import * as ROUTES from '../../constants/Routes';
import Styles from '../../constants/Styles/Header.json';

let NAVROUTES = [
  ROUTES.Home,
  ROUTES.AboutUs,
  ROUTES.FlowerShop,
  ROUTES.FlowerCare,
  ROUTES.OrderNow,
  ROUTES.ContactUs,
  ROUTES.Promos
];

const style = StyleSheet.create({
  headerWrap: Styles.header,
  navButton: Styles.nav_btn,
  navButtonSpan: Styles.nav_btn_span,
  navUL: Styles.nav_ul,
  navUlList: Styles.nav_list,
  navLiPath: Styles.nav_path,
  headerTop: Styles.header_top,
  menuRight: Styles.menu_right,
  shoppingBasket: Styles.basket,
  shoppingBasketCount: Styles.basket_count,
  faTruck: Styles.fa_truck,
  deliveryTop: Styles.delivery
});

const Header = () => {
  return (
    <header className={css(style.headerWrap)}>
      <Container>
        <div className={(css(style.headerTop))+" clearfix"}>
          <div className={css(style.menuRight)}>
            <span className={css(style.deliveryTop)}>
              <i className={(css(style.faTruck))+" fa fa-truck"}></i>
              Free Delivery within Metro Manila
            </span>
            <button className={css(style.shoppingBasket)}>
              <span className={css(style.shoppingBasketCount)}>2</span>
              <i className="fa fa-shopping-basket"></i>
            </button>
          </div>
        </div>
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
      </Container>
    </header>
  )
}

export default Header;