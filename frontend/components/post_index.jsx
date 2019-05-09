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
            {this.props.posts.map((post) => {
              return <li className="post-index-list">
                <PostIndexItem key={post.id} post={post} deletePost={this.props.deletePost}/>
              </li>
          })}
          </ul>
        </div>
      )
    }
  }

export default PostIndex;