import React, { Component, createElement } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SiteForm from '../components/SiteForm';
import SiteList from '../components/SiteList';
import * as siteActions from '../actions/sites';
import * as replacerActions from '../actions/replacers';

function mapStateToProps(state) {
  return state.sites;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    ...siteActions,
    ...replacerActions,
  }, dispatch);
}

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>設定</h2>

        <SiteForm sites={this.props.sites} onSubmit={(site) => this.props.createSite(site)} />

        <ul>
          {this.props.sites.map((site, i) => (
            <SiteList
              key={i}
              site={site}
              replacers={this.props.replaceEntries[site] || []}
              createReplacer={(selector, html) => this.props.createReplacer({ site, selector, html })}
              deleteReplacer={(selector) => this.props.deleteReplacer({ site, selector })}
              onDelete={() => this.props.deleteSite(site)}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
