import React,{Fragment, useContext} from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AuthContext from '../../Context/Auth/authContext'
import ContactContext from '../../Context/Contact/contactContext'



const Navbar = ({ title, icon }) => {

  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);

const { isAuthenticated, logout, user } = authContext;
const { clearContacts } = contactContext;

const onLogout= () =>{
  logout();
  clearContacts();
}


const authLinks = (
  <Fragment>
    <li>Hello {user && user.name}</li>
    <li>
      <a onClick={onLogout} href='#'>
        <i className="fas fa-sign-out-alt"></i> <span className="hide-sm">Logout</span>
      </a>
    </li>
  </Fragment>
  )
 

const guestLinks = (
  <Fragment>
    <li>
          <Link to="/Register">Register</Link>
          </li>
          <li>
          <Link to="/Login">Login</Link>
      </li>
  </Fragment>
)

  return (
    <Fragment>
    <div className="navbar bg-primary">
      <h1>
        <i className={icon} />
        {title}
      </h1>
      <ul>
         {isAuthenticated ? authLinks : guestLinks}
      </ul>
    </div>
    <Footer/>
    </Fragment>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Contact Keeper",
  icon: "fas fa-id-card-alt",
};
const Footer = () =>{
 return( <div className="navbar-bottom bg-primary">
      <ul>
     <i className="fas fa-user-astronaut"></i>
          <a href="https://github.com/agrittiwari/ContactKeeper" >
              <span className="hide-sm form-container copyright ">
              By Agrit Tiwari
              </span>
     </a>
     <ul><a href="https://tech-blog.agrittiwari.com">
     <span className="hide-sm form-container copyright ">
              Read Blog here
              </span>
     </a></ul>
      </ul>
  </div>
)
}

export default Navbar;
