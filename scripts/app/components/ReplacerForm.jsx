import React, { Component } from 'react';

export default class ReplacerForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selector: '',
      html: '',
      error: null,
    };

    this.addReplacer = this.addReplacer.bind(this);
    this.handleSelectorChange = this.handleSelectorChange.bind(this);
    this.handleHTMLChange = this.handleHTMLChange.bind(this);
  }

  handleSelectorChange(e) {
    this.setState({ selector: e.target.value });
  }

  handleHTMLChange(e) {
    this.setState({ html: e.target.value });
  }

  addReplacer(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.selector, this.state.html);
    this.clearInputs();
  }

  clearInputs() {
    this.setState({ selector: '', html: '' })
  }

  render() {
    return (
      <form onSubmit={this.addReplacer}>
        <input type="text" name="selector" placeholder="#foo.bar" value={this.state.selector} onChange={this.handleSelectorChange} />

        <textarea name="html" value={this.state.html} onChange={this.handleHTMLChange}></textarea>

        <button type="submit">create</button>
      </form>
    );
  }
}
