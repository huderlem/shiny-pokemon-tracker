import React, { Component } from 'react';

class EncountersLabel extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }
  onChange(event) {
    this.setState({ count: event.target.value })
    this.props.onChange(event.target.value)
  }
  render() {
    return (
      <div className="encounters-label">
        <label htmlFor="num-encounters">Encounters:</label>
        <input id="num-encounters" type="number" min="0" max="99999" value={this.props.count} onChange={this.onChange.bind(this)} />
      </div>
    )
  }
}

export default EncountersLabel;
