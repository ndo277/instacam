import React from 'react';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
      return (
        <div>
          <ul>
            {this.props.posts.map(post => {
              <li>
                <PostIndexItem post={post}/>
              </li>
          })}
          </ul>
          <h3>post index</h3>
        </div>
      )
    }
  }

export default PostIndex;