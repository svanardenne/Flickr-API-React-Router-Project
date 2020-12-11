import React, {Component} from 'react';
import axios from 'axios';
import Form from './Form'
import Nav from './Nav';
import NotFound from './NotFound';
import PhotoContainer from './PhotoContainer';
import apiKey from '../config';
import {BrowserRouter,
        Route,
        Switch
} from 'react-router-dom';

class App extends Component {

  state = {
    photos: []
  };

  componentDidMount() {
    this.getPhotos();
  }

  getPhotos = (query) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(res => {
        this.setState({
          photos: res.data.photos.photo
        });
      })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Form />
          <Nav getPhotos={this.getPhotos} />
          <Switch>
            <Route path="/cats" render={() => <PhotoContainer photos={(this.state.photos)} />} />
            <Route path="/dogs" render={() => <PhotoContainer photos={this.state.photos} />} />
            <Route path="/computers" render={() => <PhotoContainer photos={this.state.photos} />} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
