import React from 'react'

function Tallies ({ number=0, textColor, textSize, font, lineStyle, lineColor }) {

  let fives = new Array(Math.floor(number / 5)).fill('|||| ').join('')
  let ones = new Array(number%5).fill('|').join('')

  return (
    <>
        <div style={{ color: textColor, fontSize: textSize, fontFamily: font }}>
              <span style={{ textDecorationLine: 'line-through', textDecorationStyle: lineStyle, textDecorationColor: lineColor }}>{fives}</span>
              <span>{ones}</span>
        </div>
    </>
  )
}

export default Tallies
