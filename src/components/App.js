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
    isLoading: true
  };

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
          <Form getPhotos={this.getPhotos} />
          <Nav getPhotos={this.getPhotos} />
          {
            (this.state.isLoading)
            ? <p>Loading</p>
            : null
          }
          <Switch>
            <Redirect exact path="/" to="/dogs" />
            <Route path="/cats" render={() => <PhotoContainer data="cats" getPhotos={this.getPhotos} photos={(this.state.photos)} />} />
            <Route path="/dogs" render={() => <PhotoContainer data="dogs" getPhotos={this.getPhotos} photos={this.state.photos} />} />
            <Route path="/computers" render={() => <PhotoContainer data="computers" getPhotos={this.getPhotos} photos={this.state.photos} />} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
