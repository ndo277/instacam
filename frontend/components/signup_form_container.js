import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup } from '../actions/session_actions';
import { login } from '../actions/session_actions';
import { Link } from 'react-router-dom';
import React from 'react';

const mapStateToProps = (state) => ({
  errors: state.errors.sessionErrors,
  formType: 'Sign up to see photos and videos from your friends.',
  buttonType: 'Sign up',
  queryType: 'Have an account?',
  navLink: <Link to="/login">Log in</Link>
});

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(signup(user)),
  login: (user) => dispatch(login(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);