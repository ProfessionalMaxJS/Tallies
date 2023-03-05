function Tallies({
  number
}) {
  let fives = new Array(Math.floor(number / 5)).fill('|||| ').join('');
  let ones = new Array(number % 5).fill('|').join('');
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: textColor,
      fontSize: textSize,
      fontFamily: font
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      textDecorationLine: 'line-through',
      textDecorationStyle: lineStyle,
      textDecorationColor: strikeThroughColor
    }
  }, fives), /*#__PURE__*/React.createElement("span", null, ones)));
}

export { Tallies as default };
