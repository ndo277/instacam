import {connect} from 'react-redux';
import SessionForm from './session_form';
import { login, clearSessionErrors } from '../actions/session_actions';
import { Link } from 'react-router-dom';
import React from 'react';

const mapStateToProps = (state) => ({
  errors: state.errors.sessionErrors,
  formType: '',
  buttonType: "Log In",
  queryType: "Don't have an account?",
  navLink: <Link to="/signup">Sign Up</Link>
});

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(login(user)),
  login: (user) => dispatch(login(user)),
  clearErrors: () => dispatch(clearSessionErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);