import React, { Component } from 'react';
import Loader from './Loader';

class Reddit extends Component {
  state = {
    posts: [],
    error: null, 
    isLoading: false
  };

  componentDidMount() {
    this.setState({isLoading:true})
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
    .catch(error => {
      const errorMessage = error.toString()
      this.setState({error: errorMessage});
    })
    .finally(() => 
        this.setState({isLoading: false})
      );
  }

  render() {
    const { posts, error, isLoading } = this.state;

    return (
      <div>
        <h1>Reddit API FETCH() / First 5 Posts</h1>
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