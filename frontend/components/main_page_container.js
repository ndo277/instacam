import { connect } from 'react-redux';
import MainPage from './main_page';

const mapStateToProps = (state) => {
  console.log(props.currentUser);
  return {currentUser: state.entities.users[state.session.id]};
};

export default connect(mapStateToProps, null)(MainPage);