import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const {{{componentName}}} = props => (
  <>
    <p>this is {{{componentName}}}</p>
  </>
);

{{{componentName}}}.propTypes = {
  history: PropTypes.object
};
{{{componentName}}}.defaultProps = {
  history: null
};
const mapStateToProps = state => state;
export default connect(mapStateToProps, null)({{{componentName}}});
