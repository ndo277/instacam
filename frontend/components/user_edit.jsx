import React from 'react';
import {withRouter} from 'react-router';

class UserEdit extends React.Component {
  constructor(props){
    super(props);

  }

  render() {
    return(
      <div>
        <br/><br/><br/>
        <h1>EDIT FORM</h1>
      </div>
    )
  }
}

export default withRouter(UserEdit);