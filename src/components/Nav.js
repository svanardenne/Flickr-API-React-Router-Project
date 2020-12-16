import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = (props) => {

  return(
    <nav className="main-nav">
      <ul>
        {props.links.map((link, index) => (
          <li className="nav-link" key={index}>
            <NavLink to={`/${link}`}>{`${link.charAt(0).toUpperCase() + link.slice(1)}`}</NavLink>
              {index > 2
              ?
              <button className="remove-button" onClick={() => props.removeSearchLink(link)}>X</button>
              :
              null
              }
          </li>
        ))}
      </ul>

    </nav>
  );

}

export default Nav;