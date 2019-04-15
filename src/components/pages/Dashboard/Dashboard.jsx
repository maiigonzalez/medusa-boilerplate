import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Styled_Dashboard } from './styles';

class Dashboard extends Component {
  render() {
    return (
      <Styled_Dashboard>
        Hola Mundo
      </Styled_Dashboard>
    );
  }
}

Dashboard.defaultProps = {
};

Dashboard.propTypes = {
};

export default Dashboard;
