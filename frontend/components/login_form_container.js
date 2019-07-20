import {connect} from 'react-redux';
import SessionForm from './session_form';
import { login, clearSessionErrors } from '../actions/session_actions';
import {createFollow} from '../actions/follow_actions';

const mapStateToProps = (state) => ({
  errors: state.errors.sessionErrors,
  currentUser: state.entities.users[state.session.id],
  formType: '',
  buttonType: "Log In",
  linkType: "Sign up",
  urlType: "/signup",
  queryType: "Don't have an account?"
});

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(login(user)),
  login: (user) => dispatch(login(user)),
  clearErrors: () => dispatch(clearSessionErrors()),
  createFollow: (data) => dispatch(createFollow(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);