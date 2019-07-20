import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup, clearSessionErrors, login } from '../actions/session_actions';
import {createFollow} from '../actions/follow_actions';

const mapStateToProps = (state) => ({
  errors: state.errors.sessionErrors,
  currentUser: state.entities.users[state.session.id],
  formType: 'Sign up to see photos and videos from your friends.',
  buttonType: 'Sign up',
  linkType: "Log in",
  urlType: "/login",
  queryType: 'Have an account?'
});

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(signup(user)),
  login: (user) => dispatch(login(user)),
  clearErrors: () => dispatch(clearSessionErrors()),
  createFollow: (data) => dispatch(createFollow(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);