import React, { Component } from "react";

class Penny extends Component {
  state = {
    frontImage:
      "http://lincolnpennies.net/wp-content/uploads/2009/08/lincoln_penny_obverse1.jpg",
    backImage:
      "https://upload.wikimedia.org/wikipedia/commons/f/f9/United_States_penny%2C_reverse.jpg",
    clicked: false
  };

  click = () => {
    this.setState({
      clicked: !this.state.clicked
    });

    console.log(this.state.clicked);
  };

  render() {
    return (
      <img
        alt="penny"
        src={this.state.clicked ? this.state.backImage : this.state.frontImage}
        onClick={this.click}
      />
    );
  }
}

export default Penny;
