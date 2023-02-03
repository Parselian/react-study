import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

export default function Counter({ min = 1, max, current, onBlur }) {
  let [tempVal, setTempVal] = useState(current)

  function applyCurrent(num) {
    if (!isNaN(num)) {
      const validNum = Math.max(min, Math.min(max, num))
      setTempVal(validNum)
      onBlur(validNum)
    }
    else onBlur(min)
  }

  function isNaNCheck(num) {
    if(!isNaN(num)) setTempVal(num)
  }

  function inc() {
    applyCurrent(+current + 1)
  }

  function dec() {
    applyCurrent(+current - 1)
  }

  useEffect(() => {
    applyCurrent(+current)
  }, [min, max])

  return(
    <div>
      <button onClick={ () => { dec() } }>-</button>
      <input onChange={(e) => { isNaNCheck(+e.target.value) }}
             onBlur={(e) => { applyCurrent(+e.target.value) }} value={ tempVal }/>
      <button onClick={ () => { inc() } }>+</button>
    </div>
  )

}

Counter.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  current: PropTypes.number.isRequired,
  onBlur: PropTypes.func.isRequired
}