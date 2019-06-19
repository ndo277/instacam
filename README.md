# README

[Instacam Live](https://instacam-1.herokuapp.com/)

## Background and Overview

Instacam is a single-page web application for users to upload and share their own photos, in the same vein as Instagram. Users are able to navigate a seamless website to browse and check out other people's photos on their feed. Users can also conveniently post their own photos from anywhere on the site. Every user has their own profile page as well, where they can upload their own avatar picture and see an index of their post history.

![](app/assets/images/demo-ic.gif)


## Architecture and Technologies

I engineered Instacam using a Ruby on Rails backend for its strength in rapid application development. The framework's emphasis on convention over configuration means I spent less time configuring files to get set up and more time building out features. 

For the frontend, I utilized ReactJS for its component-based structure and Virtual DOM. I leveraged React's reusable components to give my app a consistent look and feel, and to easily maintain and grow my codebase. React's Virtual DOM and efficient diff algorithm allows for minimal required rendering updates, resulting in faster overall performance in my app. I integrated the Redux library to complement and manage React's unidirectional flow of data. Using just a single store of data is handy for observation and manipulation of global state. I also leveraged Redux's middleware tools, particularly thunks for async logic in AJAX requests.

I used postgreSQL to manage backend user and post data. To scale the app smoothly, I utizlized AWS S3 cloud storage to persist user-uploaded data. 

## Code Highlights

I built and integrated a custom modal component into the UI slice-of-state to dynamically render various modals throughout the entire app. By using a switch statement, this presentational component is used to render a modal for options for posts on the feed, a modal for editing a single post, and a modal for uploading an avatar: 

```javascript
// frontend/components/modal.jsx
...

const Modal = ({modal, closeModal, deletePost, currentUser}) => {
  if (!modal) return null;

  if (!modal.modalType) {
    return null;
  }

  let component;
  switch (modal.modalType) {
    case 'options':
      component = <PostOptions 
                  post={modal.post.data} 
                  deletePost={deletePost} 
                  closeModal={closeModal}
                  currentUser={currentUser} />;
      break;
    case 'edit':
      component = <EditPost
                  post={modal.post.data}
                  updatePost={updatePost}
                  closeModal={closeModal} 
                  deletePost={deletePost} />;
      break;
    case 'pic':
      component = <UploadAvatarContainer 
                   currentUser={currentUser}/>;
      break;
    default:
      return null;
  }

  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );

}

...
```
In a React view component, an openModal action dispatch would be triggered by an onClick event listener to display a particular modal on the page, depending on the modalType dispatched with the action. For example, in this component an image post is rendered on its own show page with an optionsButton to open an 'edit' modal:
```javascript
// frontend/components/modal.jsx
...

  openModal() {
    dispatch(openModal('edit', this.props.post));
  }

  render(){
    let post = this.props.post;
    if (!post) return null;
    const optionsButton = (<button className="show-button" onClick={this.openModal} >...</button>)
    return(
      <div className="show-box">
        <div className="show-item" >

        <img className="show-image" src={this.props.post.photoUrl} />

          <div className="show-side">
        <div className="show-top">
          <img onClick={() => this.props.history.push(`/users/${post.user_id}`)} className="profile-pic" src={this.props.post.avatarUrl} />
          
          <div className="show-name-button">
                <p onClick={() => this.props.history.push(`/users/${post.user_id}`)} className="avatar-name" >{this.props.post.username}</p>
            {this.props.post.user_id === this.props.currentUser.id && optionsButton}
          </div>
...
```
