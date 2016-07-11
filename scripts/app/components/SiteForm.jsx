import React, { Component } from 'react';

export default class SiteForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      site: '',
      error: null,
    };

    this.addSite = this.addSite.bind(this);
    this.handleSiteChange = this.handleSiteChange.bind(this);
  }

  addSite(e) {
    e.preventDefault();

    if (!this.state.site) {
      return;
    }

    if (this.props.sites.includes(this.state.site)) {
      this.setState({ error: `「${this.state.site}」は既に登録済みです。` })
    }

    this.props.onSubmit(this.state.site);
    this.setState({ site: '' });
  }

  handleSiteChange(e) {
    this.setState({ site: e.target.value });
  }

  render() {
    return (
      <form onSubmit={this.addSite}>
        <input type="text" name="site" placeholder="*.example.com" value={this.state.site} onChange={this.handleSiteChange} />
        <button type="submit">サイトを追加する</button>
        {this.state.error && <div className="error">{this.state.error}</div>}
      </form>
    );
  }
}
