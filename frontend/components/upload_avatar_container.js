import {connect} from 'react-redux';
import UploadAvatar from './upload_avatar';
import {updateUserAvatar} from '../actions/user_actions';
import {closeModal} from '../actions/modal_actions';


const mapDispatchToProps = dispatch => ({
  updateUserAvatar: (id, data) => dispatch(updateUserAvatar(id, data)),
  closeModal: () => dispatch(closeModal())
});

export default connect(null, mapDispatchToProps)(UploadAvatar);