import React from 'react';

import Photo from './Photo';

const PhotoContainer = (props) => {

  return(
    <div className="photo-container">
      <h2>Results</h2>
      <ul>
        {props.photos.map(photo => 
          <Photo 
            key={photo.id}
            photos={photo} 
          />
        )}
      </ul>
    </div>
  );

}

export default PhotoContainer;