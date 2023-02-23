import { React, useState, useEffect } from 'react'

function Tallies ({ number, lineStyle, textColor, strikeThroughColor, textSize, font }) {
  const [fives, setFives] = useState('')
  const [ones, setOnes] = useState('')

  useEffect(() => {
    let i = 0
    let newString5 = ''
    while (i < Math.floor(number / 5)) {
      newString5 += '|||| '
      i++
    }
    setFives(newString5)

    let j = 0
    let newString1 = ''
    while (j < number % 5) {
      newString1 += '|'
      j++
    }
    setOnes(newString1)
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

module.exports = Tallies

Tallies.propTypes = {
  number: Number,
  lineStyle: String,
  textColor: String,
  strikeThroughColor: String,
  textSize: String,
  font: String
}
