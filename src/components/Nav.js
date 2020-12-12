import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = (props) => {

  return(
    <nav className="main-nav">
      <ul>
        <li><NavLink onClick={() => props.getPhotos('cats')} to="/cats">Cats</NavLink></li>
        <li><NavLink onClick={() => props.getPhotos('dogs')} to="/dogs">Dogs</NavLink></li>
        <li><NavLink onClick={() => props.getPhotos('computers')} to="/computers">Computers</NavLink></li>
      </ul>
    </nav>
  );

}

export default Nav;