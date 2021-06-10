import React, { Component } from "react";
import "./Counter.css";

class Counter extends Component {
  state = {
    number: 0,
    stopNumber: 0,
  };

  render() {
    const { number, stopNumber } = this.state;

    return (
      <div>
        <h1>{number}</h1>
        <h2>Not Changed Number: {stopNumber}</h2>
        <button
          onClick={() => {
            this.setState((prevState) => {
              return {
                number: prevState.number - 1,
              };
            });

            this.setState((prevState) => ({
              number: prevState.number - 1,
            }));
          }}
        >
          -1
        </button>
        <button
          onClick={() => {
            this.setState({ number: number + 1 }, () => {
              console.log(this.state);
            });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
