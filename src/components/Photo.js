import React from 'react';

const Photo = (props) => {
  return(
    <li>
      <img src={`https://live.staticflickr.com/${props.photos.server}/${props.photos.farm}/${props.photos.id}_${props.photos.secret}.jpg`} alt="" />
    </li>
  );

}

export default Photo;