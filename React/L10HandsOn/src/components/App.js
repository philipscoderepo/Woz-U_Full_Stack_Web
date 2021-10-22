import React from 'react';
import Counter from './Counter';
import { connect } from 'react-redux';
import { increment, decrement, inputChange, changeCountNumber} from '../actions/index';

class App extends React.Component {
  render() {
    return (
      <div>
        <h3>Counter</h3>
        <Counter 
          count={this.props.count} 
          incrementCounter={this.props.incrementCounter}
          input={this.props.input}
          onIncrement={this.props.onIncrement} 
          onDecrement={this.props.onDecrement} 
          onChangeCountNumber={this.props.onChangeCountNumber}
          onInputChange={this.props.onInputChange}
        />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
    onInputChange: (number) => dispatch(inputChange(number)),
    onChangeCountNumber: () => dispatch(changeCountNumber())
  };
}

function mapStateToProps(state) {
    return {
      count: state.count,
      incrementCounter: state.incrementCounter
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(App);