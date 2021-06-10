import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponentC extends Component {
  static defaultProps = {
    name: 'default name'
  };

  static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
  };

  render() {
    const { name, favoriteNumber, children } = this.props;

    return (
      <div>
        Hi! My name is {name}. <br/>
        children value is {children}!
        <br/>
        My favorite number is {favoriteNumber}!
      </div>
    );
  }
}



export default MyComponentC;