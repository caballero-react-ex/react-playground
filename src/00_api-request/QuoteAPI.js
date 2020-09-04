import React, { Component } from 'react';
import axios from 'axios';
import Loader from './Loader';
import './Quote.css';

class Quote extends Component {
  state = {
    quotes: [],
    error: null, 
    isLoading: false
  };

  componentDidMount() {
    this.setState({isLoading: true})
    axios
      .get(
        // `https://quote-garden.herokuapp.com/api/v2/quotes/${this.props.theme}?limit=3`
        //`https://quote-garden.herokuapp.com/api/v2/genre/${this.props.theme}?page=1&limit=50`
        `https://quote-garden.herokuapp.com/api/v2/authors/${this.props.author}?page=1&limit=500`
      )
      .then( response => {
        console.log(response.data.quotes);

        const quotes = response.data.quotes;
        
      this.setState({ quotes });
      
      })
      .catch(error => {
        this.setState({error: error.message});
      })
      .finally(() => 
        this.setState({isLoading: false})
      );
      
  }

  render() {
    const { quotes, error, isLoading } = this.state;

    return (
      <div>
        <h1>Quotes</h1>
        
        <div>
          {isLoading ? <Loader /> : ""} 
          {error ? (
            <div>{error}</div>
          ) : (
            <>
              <h3>About {this.props.theme}</h3>
              
              {quotes.map(quote => (
                <ul key={quote._id} style={{listStyleType: "none", paddingLeft: "0"}}>
                  <li className="quote">&#8220;{quote.quoteText}&#8221;</li>
                  <li className="author">&#8212; {quote.quoteAuthor}</li>
                </ul>
              ))}
            </>
          )}
        </div>
      </div>
    );
  }
}

export default Quote; 


