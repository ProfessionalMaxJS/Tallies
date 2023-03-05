import { useState, useEffect, React } from 'react';

function Tallies({
  number,
  lineStyle,
  textColor,
  strikeThroughColor,
  textSize,
  font
}) {
  const [fives, setFives] = useState('');
  const [ones, setOnes] = useState('');
  useEffect(() => {
    setFives(new Array(Math.floor(number / 5)).fill('|||| ').join(''));
    setOnes(new Array(number % 5).fill('|').join(''));
  }, [number]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement("div", {
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
