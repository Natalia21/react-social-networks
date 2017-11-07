import React, { Component } from 'react';
import { connect } from 'react-redux';

class Posts extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { posts } = this.props;

    console.log('posts', posts);

    const postElements = posts.map(
        post => (
            <li key={post.post_id}>
              <a href={post.link}>{post.link}</a>
            </li>
        )
    );

    return (
      <ul>{postElements}</ul>
    );
  }
}

export default connect()(Posts);
