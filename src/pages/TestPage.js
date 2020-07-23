import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../redux/actions";
import Nav from "../components/Nav";

import { Button } from "@material-ui/core";

class Test extends React.Component {
  _plus = () => {
    this.props.increment();
  };

  _minus = () => {
    this.props.decrement();
  };

  render() {
    const { count } = this.props;
    return (
      <div className="App">
        <Nav />
        <h1>I'm test</h1>
        <h2>Count: {count}</h2>
        <div>
          <Button onClick={this._plus} variant="contained" color="primary">
            +
          </Button>
          <Button onClick={this._minus} variant="contained" color="primary">
            -
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  count: state.testReducer.count,
});

const mapDispatchToProps = {
  increment,
  decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(Test);
