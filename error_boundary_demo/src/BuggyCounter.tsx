import React, { Component } from "react";

export default class BuggyCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(({ count }) => ({
      count: count + 1,
    }));
  }

  render() {
    if (this.state.count === 5) {
      throw new Error("Error thrown from buggy counter");
    }
    return (
      <div>
        <h1 onClick={this.handleClick}>{this.state.count}</h1>
      </div>
    );
  }
}
