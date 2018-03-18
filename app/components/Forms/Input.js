import PropTypes from 'prop-types';
import React, {Component} from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

export const DEFAULT_INPUT = 'default';
export const SUBMIT_INPUT   = 'submit';
export const TEXT_INPUT  = 'text';

class Input extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  };

  handleChange(e) {
    const { onChange } = this.props;
    onChange({ [e.target.name]: e.target.value });
  }

  render() {
    const DEFAULT_STYLE = {
      display: this.props.display !== 'undefined' ? this.props.display : "inherit",
      boxSizing: 'border-box',
      fontSize: '14px',
      width: this.props.width || '100%'
    }

    const SUBMIT_STYLE = {
      ...DEFAULT_STYLE,
      background: '#2ecc71',
      border: '1px solid #27ae60',
      height: '40px',
      lineHeight: '40px'
    }

    const INPUT_STYLE = {
      ...DEFAULT_STYLE,
      background: 'rgba(255,255,255,0.8)',
      borderRadius: '1px',
      border: '1px solid #ddd',
      height: '40px',
      lineHeight: '40px',
      paddingLeft: '13px',
      paddingRight: '13px'
    }

    const styles = StyleSheet.create({
      [DEFAULT_INPUT]: DEFAULT_STYLE,
      [SUBMIT_INPUT]: SUBMIT_STYLE,
      [TEXT_INPUT]: INPUT_STYLE
    });

    return (
      <div>
        <input className={css(styles[this.props.variety])} name={this.props.name} type={this.props.type} value={this.props.value} placeholder={this.props.placeholder} onChange={this.handleChange}/>
      </div>
    )
  }
}

Input.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.oneOf([
    'button','checkbox','date','file','hidden','number','password','radio','search','submit','text'
  ]).isRequired,
  variety: PropTypes.oneOf([
    DEFAULT_INPUT, SUBMIT_INPUT, TEXT_INPUT
  ]),
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}

export default Input;