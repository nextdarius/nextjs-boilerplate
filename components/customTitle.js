import { Component } from "react";

class CustomTitle extends Component {
  render() {
    return <h1 className="red">{this.props.title}</h1>;
  }
}

export default CustomTitle;
