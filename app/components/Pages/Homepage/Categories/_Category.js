import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { Link } from "react-router-dom";
import * as ROUTES from '../../../../constants/CategoryRoutes';
import Styles from '../../../../constants/Styles/Category.json';

let CATEGORY_ROUTES = [
  ROUTES.Roses,
  ROUTES.Bouquets,
  ROUTES.Funerals,
  ROUTES.Weddings,
  ROUTES.Vasesandpots,
  ROUTES.WithStand
];

const style = StyleSheet.create({
  linkStyle: Styles.link_style,
  linkList: Styles.link_list,
  linkText: Styles.link_text,
  linkName: Styles.link_name,
  textFrom: Styles.text_from,
  linkPrice: Styles.link_price,
  textCurrency: Styles.text_currency
});

const Category = () => {
  return (
    CATEGORY_ROUTES.map((link, i) =>
      <li className={css(style.linkList)} key={i}>
        <Link to={link.path} className={css(style.linkStyle)} style={{backgroundImage: 'url('+link.thumbnail+')'}}>
          <span className={css(style.linkText)}>
            <span className={css(style.linkName)}>{link.name}</span>
            <br/>
            <span className={css(style.textFrom)}>from</span>
            <span className={css(style.linkPrice)}>{link.price}</span>
            <span className={css(style.textCurrency)}>php</span>
          </span>
        </Link>
      </li>
    )
  )
}

export default Category;