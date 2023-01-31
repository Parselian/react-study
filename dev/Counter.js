import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

export default function Counter({ min = 1, max, current, onChange }) {

  function applyCurrent(num) {
    onChange(Math.max(min, Math.min(max, num)))
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
      <input onChange={ (e) => { applyCurrent(e.target.value) } } value={ current }/>
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