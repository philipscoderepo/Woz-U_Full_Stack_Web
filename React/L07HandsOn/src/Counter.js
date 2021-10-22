import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
      count: state.count
    };
  }

class Counter extends React.Component {
    incrementOne = () => {
      this.props.dispatch({
        type: 'INCREMENT_ONE'
      });
    };
  
    decrementOne = () => {
      this.props.dispatch({
        type: 'DECREMENT_ONE'
      });
    };
    
    incrementFive = () => {
        this.props.dispatch({
          type: 'INCREMENT_FIVE'
        });
      };
    
    decrementTen = () => {
        this.props.dispatch({
        type: 'DECREMENT_TEN'
        });
    };

    reset = () => {
      this.props.dispatch({
        type: 'RESET'
      });
    };
  
    render() {
      return (
        <div>
          <h2>Counter</h2>
          <div>
            <span>{this.props.count}</span>
            <br />
            <button onClick={this.incrementOne}>Increase By 1</button>
            <br />
            <button onClick={this.incrementFive}>Increase By 5</button>
            <br />
            <button onClick={this.decrementOne}>Decrease By 1</button>
            <br />
            <button onClick={this.decrementTen}>Decrease By 10</button>
            <br />
            <button onClick={this.reset}>Reset</button>
          </div>
        </div>
      );
    }
}

//When connect() calls mapStateToProps and returns those values to the Counter component
export default connect(mapStateToProps)(Counter);

