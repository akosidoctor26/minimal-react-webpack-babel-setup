import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Title = styled.div`
  color: blue;
`;

class Home extends Component {
  state = {}

  // -- Event Handlers

  // -- Lifecycle Methods
  componentDidMount() { }

  render() {
    const { } = this.props;
    return (<Title></Title>);
  }
}

Home.propTypes = {
}

Home.displayName = '<Home /> Component';

export default Home;
