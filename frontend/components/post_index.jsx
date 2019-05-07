import React from 'react';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {
  constructor(props){
    super(props);

    this.state = this.props.posts;
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  componentDidUpdate(prevProps) {
   if (this.state.length != prevProps.posts.length){
    this.props.fetchPosts();
   }
  }

  render() {
      return (
        <div>
          <ul>
            {this.props.posts.map(post => {
              return <li className="post-index-list">
                <PostIndexItem key={post.id} post={post}/>
              </li>
          })}
          </ul>
        </div>
      )
    }
  }

export default PostIndex;