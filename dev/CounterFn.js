import React, { useState } from "react"
import PropTypes from "prop-types"

export default function CounterFn({ min, max }) {
  let [counter, setCounter] = useState(min)

  function inc() {
    if (counter < max) {
      setCounter( counter + 1)
    }
  }

  function dec() {
    if (counter > min) {
      setCounter(counter - 1)
    }
  }

  function updateInput(e) {
    const value = e.target.value
    let result

    if (value >= min && value <= max) {
      result = parseInt(e.target.value)
    }

    if (value < min) {
      result = min
    }

    if (value > max) {
      result = max
    }

    if (isNaN(value) || value === '') {
      result = value
    }

    setCounter(result)
  }

  return(
    <div>
      <button onClick={ () => { dec() } }>-</button>
      <input onChange={ updateInput } value={ counter }/>
      <button onClick={ () => { inc() } }>+</button>
    </div>
  )
}

CounterFn.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired
}