import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class Posts extends Component {
  getOwner() {
    const { posts } = this.props;

    if (!posts.length) {
      return null;
    }

    const owner = posts[0]['owner'];

    return (
      <div className="so-owner">
        <div className="photo-container">
          <img src={owner.profile_image} />
        </div>
        <a href={owner.link} className="owner-name">{owner.display_name}</a>
        <span>Reputation: {owner.reputation} </span>
      </div>
    )
  }

  getPosts() {
    const { posts } = this.props;

    if (!posts.length) {
      return null;
    }

    console.log('posts', posts);

    const postElements = posts.map(
        post => (
            <li key={post.post_id}>
              <a href={post.link}>{post.link}</a>
            </li>
        )
    );

    return (
      <div className="posts-container">
        Posts:
        <ul className="posts">{postElements}</ul>
      </div>
    )
  }

  render() {

    return (
      <div>
        <Link to='/' className="pull-left navigation">Home</Link>
        <div className="col-lg-10 container">
          {this.getOwner()}
          {this.getPosts()}
        </div>
      </div>
    );
  }
}

export default connect(state => state)(Posts);
