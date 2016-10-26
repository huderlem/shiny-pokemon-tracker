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
      <div>
        <p className="encounters-label">Encounters:</p>
        <input type="number" min="0" value={this.props.count} onChange={this.onChange.bind(this)} />
      </div>
    )
  }
}

export default EncountersLabel;
