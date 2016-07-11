import React, { Component } from 'react';

export default class ReplacerList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { selector, html } = this.props.replacer;
    return (
      <li>
        {selector}: {html} <button onClick={this.props.onDelete}>remove</button>
      </li>
    );
  }
}
