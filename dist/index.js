'use strict';

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function Tallies({
  number,
  textColor,
  textSize,
  font,
  lineStyle,
  strikeThroughColor
}) {
  let fives = new Array(Math.floor(number / 5)).fill('|||| ').join('');
  let ones = new Array(number % 5).fill('|').join('');
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("div", {
    style: {
      color: textColor,
      fontSize: textSize,
      fontFamily: font
    }
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    style: {
      textDecorationLine: 'line-through',
      textDecorationStyle: lineStyle,
      textDecorationColor: strikeThroughColor
    }
  }, fives), /*#__PURE__*/React__default["default"].createElement("span", null, ones)));
}

module.exports = Tallies;
