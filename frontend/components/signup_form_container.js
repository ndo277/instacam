import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup } from '../actions/session_actions';
import { Link } from 'react-router-dom';
import React from 'react';

const mapStateToProps = (state) => ({
  errors: state.errors.sessionErrors,
  formType: 'Sign Up',
  navLink: <Link to="/login">Log In</Link>
});

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(signup(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);