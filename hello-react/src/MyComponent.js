import React from "react";
import PropTypes from "prop-types";

const MyComponent = ({ name, favoriteNumber, children }) => {
  return (
    <div>
      Hi! My name is {name}. <br />
      children value is {children}!
      <br />
      My favorite number is {favoriteNumber}!
    </div>
  );
};

MyComponent.defaultProps = {
  name: "default name"
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired
};

export default MyComponent;
