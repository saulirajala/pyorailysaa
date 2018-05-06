import React, { Component } from 'react';

/**
 * Column
 */
class Column extends Component {
  render() {
    return (
      <div className="column">
        <h3>{this.props.title}</h3>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default Column;
