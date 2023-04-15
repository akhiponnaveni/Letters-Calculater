// Write your code here.

import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  onChangeInput = event => {
    const val = event.target.value
    this.setState(prevState => ({
      count: val.length,
    }))
  }

  render() {
    const {count} = this.state

    return (
      <div className="main-container">
        <div className="sub-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          {/* <label htmlFor="one" className="paragraph">
            Enter the phrase
          </label>

          <input
            type="search"
            placeholder="Enter the phrase"
            className="Input"
            onChange={this.onNumber}
            id="one"
          />
          <p className="Button" type="button">
            No.of letters: 0 {count.length}
          </p> */}
          <label htmlFor="input" className="paragraph">
            Enter the phrase
          </label>{' '}
          <br />
          <input type="text" id="input" onChange={this.onChangeInput} />
          <p className="Button">No.of letters: {count}</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          className="Image"
          alt="letters calculator"
        />
      </div>
    )
  }
}

export default LettersCalculator
