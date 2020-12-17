import React, {Component} from 'react';

/* Component imports */ 
import NotFound from './NotFound';
import Photo from './Photo';

class PhotoContainer extends Component {

  componentDidMount() {
    /* Fetches data on mount based on query */ 
    this.props.pageLoad();
    if (this.props.data) {
      this.props.getPhotos(this.props.data);
    } else {
      this.props.getPhotos(this.props.match.params.query);
    }

  }

  componentDidUpdate(prevProps) {
    /* Fetches data on mount based on query 
    (if statement prevents infinite loop) */ 
    if (this.props.data && this.props.data !== prevProps.data) {
      this.props.pageLoad();
      this.props.getPhotos(this.props.data);
    } else {
      if (this.props.match.params.query !== prevProps.match.params.query) {
        this.props.pageLoad();
        this.props.getPhotos(this.props.match.params.query);
      }
    }
  }

  render() {
    return(
      <ul>
        {
          (this.props.photos.length > 0)
          ?           
          this.props.photos.map(photo => 
            <Photo 
              key={photo.id}
              photos={photo} 
            />
          )
          :
          <NotFound />
        }
      </ul>
    );
  }
}

export default PhotoContainer;