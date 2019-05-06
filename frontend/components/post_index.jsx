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
              return <li>
                <PostIndexItem post={post}/>
              </li> 
          })}
          </ul>
        </div>
      )
    }
  }

export default PostIndex;