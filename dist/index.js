'use strict';

var react = require('react');

function Tallies({
  number,
  lineStyle,
  textColor,
  strikeThroughColor,
  textSize,
  font
}) {
  const [fives, setFives] = react.useState('');
  const [ones, setOnes] = react.useState('');
  react.useEffect(() => {
    setFives(new Array(Math.floor(number / 5)).fill('|||| ').join(''));
    setOnes(new Array(number % 5).fill('|').join(''));
  }, [number]);
  return /*#__PURE__*/react.React.createElement(react.React.Fragment, null, /*#__PURE__*/react.React.createElement(Header, null), /*#__PURE__*/react.React.createElement("div", {
    style: {
      color: textColor,
      fontSize: textSize,
      fontFamily: font
    }
  }, /*#__PURE__*/react.React.createElement("span", {
    style: {
      textDecorationLine: 'line-through',
      textDecorationStyle: lineStyle,
      textDecorationColor: strikeThroughColor
    }
  }, fives), /*#__PURE__*/react.React.createElement("span", null, ones)));
}

module.exports = Tallies;
