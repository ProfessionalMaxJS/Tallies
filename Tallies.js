import { React, useState, useEffect } from 'react'

function Tallies ({ number, lineStyle, textColor, strikeThroughColor, textSize, font }) {
  const [fives, setFives] = useState('')
  const [ones, setOnes] = useState('')

  useEffect(() => {
    setFives(new Array(Math.floor(number / 5)).fill('|||| ').join(''))
    setOnes(new Array(number % 5).fill('|').join(''))
  }, [number])

  return (
        <>
            <div style={{ color: textColor, fontSize: textSize, fontFamily: font }}>
                <span style={{ textDecorationLine: 'line-through', textDecorationStyle: lineStyle, textDecorationColor: strikeThroughColor }}>{fives}</span>
                <span>{ones}</span>
            </div>
        </>
  )
}

export default Tallies
