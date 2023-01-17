import React from "react"
import PropTypes from "prop-types"

export default class CounterClass extends React.Component {
  state = {
    counter: this.props.min
  }

  inc = () => {
    if (this.state.counter < this.props.max) {
      return this.setState({counter: this.state.counter + 1})
    }
  }

  dec = () => {
    if (this.state.counter > this.props.min) {
      return this.setState({counter: this.state.counter - 1})
    }
  }

  updateInput = (e) => {
    const value = e.target.value
    let result

    if (value >= this.props.min && value <= this.props.max) {
      result = parseInt(e.target.value)
    }

    if (value < this.props.min) {
      result = this.props.min
    }

    if (value > this.props.max) {
      result = this.props.max
    }

    if (isNaN(value) || value === '' || value === '-') {
      result = value
    }

    this.setState({counter: result})
  }

  render() {
    return <div className="counter">
      <button onClick={this.dec}>-</button>
      <input type="text" onChange={this.updateInput} value={this.state.counter}/>
      <button onClick={this.inc}>+</button>
    </div>
  }
}

CounterClass.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired
}