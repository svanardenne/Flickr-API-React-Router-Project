import React, {Component} from 'react';

import Photo from './Photo';

class PhotoContainer extends Component {

  componentDidMount() {
    this.props.getPhotos(this.props.data);
  }

  render() {
    return(
      <div className="photo-container">
        <h2>Results</h2>
        <ul>
          {this.props.photos.map(photo => 
            <Photo 
              key={photo.id}
              photos={photo} 
            />
          )}
        </ul>
      </div>
    );
  }
}

export default PhotoContainer;