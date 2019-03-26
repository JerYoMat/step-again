import React from 'react';
import { connect } from 'react-redux';
import {increment, reset} from './index';

class StepCounter extends React.Component{
  increment = () => {
    this.props.increment()
  }

  reset = () => {
    this.props.reset()
  }

  render() {
    return (
      <div className='card col-md-6'>
        <div className='card-body'>
          <h5 className='card-title'>  You have walked {this.props.count} steps</h5>
          <button onClick={this.increment}>
            Add Step
          </button>
          <button onClick={this.reset}>
            Reset
          </button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(increment()),
  reset: () => dispatch(reset())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StepCounter)