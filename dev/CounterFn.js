import React, { useState } from "react"
import PropTypes from "prop-types"

export default function CounterFn({ min, max }) {
  let [counter, setCounter] = useState(min)

  //Min = 1 Max = 10 Counter = 12
  function validateIncome(counter) {
    const validNum = Math.max(min, Math.min(max, counter))
    setCounter(validNum)
  }

  function updateInput(e) {
    if (!isNaN(+e.target.value)) validateIncome(+e.target.value)
  }

  return(
    <div>
      <button onClick={ () => { validateIncome(counter - 1) } }>-</button>
      <input onChange={ updateInput } value={ counter }/>
      <button onClick={ () => { validateIncome(counter + 1) } }>+</button>
    </div>
  )
}

CounterFn.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired
}