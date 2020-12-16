import React, {Component} from 'react';
import axios from 'axios';
import Form from './Form'
import Nav from './Nav';
import NotFound from './NotFound';
import PhotoContainer from './PhotoContainer';
import apiKey from '../config';
import {BrowserRouter,
        Route,
        Switch,
        Redirect
} from 'react-router-dom';

class App extends Component {

  state = {
    photos: [],
    navLinks: [
      "cats",
      "dogs",
      "computers"
    ],
    isLoading: true
  };

  addSearchLink = (query) => {
    this.setState(prevState => {
      return {
        navLinks: [
          ...prevState.navLinks,
          query
        ]
      }
    });
  }

  removeSearchLink = (query) => {
    this.setState( prevState => {
      return {
        navLinks: prevState.navLinks.filter(q => q !== query)
      };
    });
  }

  getPhotos = (query = 'random') => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(res => {
        this.setState({
          photos: res.data.photos.photo,
          isLoading: false
        });
      })
      .catch(err => {
        console.log('Error fetching data', err);
      });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Route render={(props) => <Form {...props} addSearchLink={this.addSearchLink} />} />
          <Nav getPhotos={this.getPhotos}  links={this.state.navLinks}  removeSearchLink={this.removeSearchLink} />
          {
            (this.state.isLoading)
            ? <p>Loading</p>
            : null
          }
          <Switch>
            <Redirect exact path="/" to="/dogs" />
            <Route path="/:query" render={(props) => <PhotoContainer {...props} getPhotos={this.getPhotos} photos={this.state.photos} />} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
