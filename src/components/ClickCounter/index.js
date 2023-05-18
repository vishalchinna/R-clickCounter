import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onClickChange = () => {
    this.setState(prev => ({count: prev.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="head">
          The Button has been Clicked <br />
          <span className="cnt">{count}</span> times
        </h1>
        <p className="para">Click the Button to increase the count</p>
        <button className="button" type="button" onClick={this.onClickChange}>
          Click me
        </button>
      </div>
    )
  }
}

export default ClickCounter
