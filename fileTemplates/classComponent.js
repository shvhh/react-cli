import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class {{{componentName}}} extends React.Component {
  state = {
    fieldValue: '{{{componentName}}}'
  };
  shouldComponentUpdate() {}
  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnmount() {}
  getSnapshotBeforeUpdate() {}

  render() {
    return (
      <>
        <p>this is {this.state.fieldValue}</p>
      </>
    );
  }
}



{{{componentName}}}.propTypes = {
  };


  {{{componentName}}}.defaultProps = {
 history:null
};

const mapStateToProps = state => state;
export default connect(mapStateToProps, null)({{{componentName}}});
