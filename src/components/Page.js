import React from "react";
import Autosuggest from "react-autosuggest";
import AutosuggestHighlightMatch from "autosuggest-highlight/match";
import AutosuggestHighlightParse from "autosuggest-highlight/parse";
import Results from "./Results"
import About from "./About"
import Tooltipper from "./Tooltipper"
import {
    Navbar,
    Nav,
    ToggleButton,
    ButtonGroup
} from "react-bootstrap"

const config = require("../config.json")

const getSuggestions = async (value) => {
  return fetch(new URL("/search?" + encodeURIComponent(value), config.apiURL))
  .then(res => res.json());
};
  
const renderSuggestion = (suggestion, { query }) => {
  const suggestionText = `${suggestion.artists[0].name} - ${suggestion.name}`;
  const matches = AutosuggestHighlightMatch(suggestionText, query);
  const parts = AutosuggestHighlightParse(suggestionText, matches);

  return (
    <span className="suggestion-content">
      <img src={suggestion.album.images[0].url} width="100" alt="Album Art" />
      <span className="name">
        {
          parts.map((part, index) => {
              const className = part.highlight ? "highlight" : null;

              return (
              <span className={className} key={index}>{part.text}</span>
              );
          })
        }
      </span>
    </span>
  );
}

const getSuggestionValue = suggestion => suggestion.name

class Page extends React.Component {
  constructor(props) {
      super(props);
      this.state = {           
          items: [],
          result: {},
          value: "",
          suggestions: [],

          error: null,
          isLoaded: false,
          about: true            
      }

      this.onKeyUp = this.onKeyUp.bind(this);
  }
  
  jsonFetch = (id) => {
    fetch(new URL("/track?id=" + id, config.apiURL))
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            error: null,
            result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
      .then(
        () => {
          this.setState({
            value: ""
          })
        }
      )
  }
  
  onChange = (event, { newValue }) => {
      this.setState({
        value: String(newValue)
      });
    };
  
  onSuggestionsFetchRequested = ({ value }) => {
    getSuggestions(value)
    .then(result => this.setState({
      suggestions: result.tracks.items,
      sIsLoaded: true
    }));
  };
  
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
      sIsLoaded: false
    });
  };
  
  onSuggestionSelected = (event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }) => {
    this.setState({
      isLoaded: false,
      about: false,
      value: ""
    });

    this.jsonFetch(suggestion.id);
  }

  aboutButton = () => {
    this.setState(prevState => ({
      about: !prevState.about
    }))
  }

  onKeyUp = (event) => {
    if(event.charCode === 13 && this.state.value !== "") {
      this.jsonFetch(this.state.value)
    }
  }
    
  render() {
    let {
      error, isLoaded, result, value, suggestions, about
    } = this.state;
  
    const inputProps = {
      placeholder: "Search Spotify...",
      value,
      onChange: this.onChange,
      onKeyPress: this.onKeyUp
    };

    let header = (
      <header className="App-header">
        <Navbar bg="0f0f0f" variant="dark">
          <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps}
            onSuggestionSelected={this.onSuggestionSelected}
          />
          <Nav className="mr-auto" />
          
          <Tooltipper text="About / Help" pos="bottom">
            <ButtonGroup toggle className="mb-2">
              <ToggleButton
                  type="checkbox"
                  variant="secondary"
                  checked={about}
                  value="1"
                  onChange={this.aboutButton}
                  size="lg"
              >
                ?
              </ToggleButton>
            </ButtonGroup>
          </Tooltipper>
        </Navbar>
      </header>
    )

    return (
      <div className="App">
        {header}
        <body className="App-body">
          {
            error ?
            <span className="about-text">Error: {error.message}</span>
            : (
              about ?
              <About />
              : (
                isLoaded ?
                <Results json={result} />
                : <div />
              )
            )
          }
        </body>
      </div>
    )
  }
}

export default Page