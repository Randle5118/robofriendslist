import React, { Component } from "react";

export default class ErrorBoundray extends Component {
  constructor(props) {
    super(props);
    this.stare = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.hasError) {
      return <h1>Oooops . This is not good </h1>;
    }
    return this.props.children;
  }
}
