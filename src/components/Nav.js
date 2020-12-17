import React from 'react';
import {NavLink, Link} from 'react-router-dom';

const Nav = (props) => {

  return(
    <nav className="main-nav">
      <ul>
        <li className="nav-link"><NavLink to="/cats">Cats</NavLink></li>
        <li className="nav-link"><NavLink to="/dogs">Dogs</NavLink></li>
        <li className="nav-link"><NavLink to="/computers">Computers</NavLink></li>
        {props.links.map((link, index) => (
          <li className="nav-link" key={index}>
            <NavLink to={`/search/${link}`}>{`${link.charAt(0).toUpperCase() + link.slice(1)}`}</NavLink>
              <Link to={`/`} className="remove-button" onClick={() => props.removeSearchLink(link)}>X</Link>
          </li>
        ))}
      </ul>

    </nav>
  );

}

export default Nav;