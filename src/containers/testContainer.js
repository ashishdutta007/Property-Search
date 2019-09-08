import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { randomTestAction } from '../actions/testActions';

class TestContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const testPayload = {
      type: 'NEW_ACTION_TYPE',
      payload: { name: 'Bond' },
    };
    // this.props.randomTestAction(testPayload);
    this.props.randomTestAction();
  }

  render() {
    return (
      <div>
        <h2>
          {this.props.testData}
        </h2>
      </div>
    );
  }
}

//Define prop types
TestContainer.propTypes = {
  randomTestAction: PropTypes.func.isRequired,
  testData: PropTypes.array.isRequired,
}

const mapStateToProps = (state) => {
  return {
    testData: state.testData.testItems
  }
}

const mapActionToProps = (dispatch) => {
  return {
    randomTestAction: () => {
      dispatch(randomTestAction());
    }
  }
}

// It connects the Component to the redux-store passed by the Provider 
// connect() from react-redux args takes state & actions and 
// returns a HOC with the state and action as props 

// export default connect(mapStateToProps, mapActionToProps)(TestContainer);
export default connect(mapStateToProps, { randomTestAction })(TestContainer);