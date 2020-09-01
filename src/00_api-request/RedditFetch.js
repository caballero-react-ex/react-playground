import React, { Component } from 'react';

class Reddit extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    fetch(`http://www.reddit.com/r/${ this.props.subreddit }.json`)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Something went wrong ...');
      }
    })
    .then(data => {
      const posts = data.data.children.map(
        obj => obj.data
      );
      this.setState({ posts });
    }) 
  }

  render() {
    const { posts } = this.state;
    console.log(posts);

    return (
      <div>
        <h1>Reddit API FETCH() / First 5 Posts</h1>
        <h2>{ `/r/${this.props.subreddit}` }</h2>
        <div>
          
          {posts.slice(0, 5).map(post => (
            <ul key={post.id}>
              <li >{post.title}</li>
              <li >{post.permalink}</li>
            </ul>
          ))}
        </div>
      </div>
    );
  }
}

export default Reddit; 