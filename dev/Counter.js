import React, { useRef, useEffect } from "react"
import PropTypes from "prop-types"

export default function Counter({ min = 1, max, current, onChange }) {
  const inputVal = useRef()

  function applyCurrent(num) {
    if (isNaN(num)) num = current

    const validNum = Math.max(min, Math.min(max, num))
    inputVal.current.value = validNum
    onChange(validNum)
  }

  function inc() {
    applyCurrent(current + 1)
  }

  function dec() {
    applyCurrent(current - 1)
  }

  useEffect(() => {
    applyCurrent(current)
  }, [current])

  return(
    <div>
      <button onClick={ () => { dec() } }>-</button>
      <input ref={inputVal} onBlur={(e) => { applyCurrent(e.target.value) }} defaultValue={ current }/>
      <button onClick={ () => { inc() } }>+</button>
    </div>
  )

}

Counter.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  current: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
}