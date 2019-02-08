import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

// -- Routes 
import Home from 'containers/home';


class Router extends Component {
  state = {}

  render() {
    const { } = this.props;
    return (<Switch>
      <Route exact path="/" component={Home} />
    </Switch>);
  }
}

Router.propTypes = {
}

Router.displayName = '<Router /> Component';

export default Router;