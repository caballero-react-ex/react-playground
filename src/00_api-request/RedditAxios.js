import React, { Component } from 'react';
import axios from 'axios';
import Loader from './Loader';

class Reddit extends Component {
  state = {
    posts: [],
    error: null, 
    isLoading: false
  };

  componentDidMount() {
    this.setState({isLoading: true})
    axios
      .get(
        `https://www.reddit.com/r/${ this.props.subreddit }.json`
      )
      .then( response => {
        const posts = response.data.data.children.map(
          obj => obj.data
        );
      this.setState({ posts });
      })
      .catch(error => {
        this.setState({error: error.message});
      })
      .finally(() => 
        this.setState({isLoading: false})
      );
  }

  render() {
    const { posts, error, isLoading } = this.state;
    console.log(isLoading)

    return (
      <div>
        <h1>Reddit API call with axios / First 5 Posts</h1>
        <h2>{ `/r/${this.props.subreddit}` }</h2>
        <div>
          {isLoading ? <Loader /> : ""} 
          {error ? (
            <div>{error}</div>
          ) : (
            <>
              {posts.slice(0, 5).map(post => (
                <ul key={post.id}>
                  <li >{post.title}</li>
                  <li >{post.permalink}</li>
                </ul>
              ))}
            </>
          )}
        </div>
      </div>
    );
  }
}

export default Reddit; 