import React from "react";
import logo from '../logo.svg';
import PropTypes from 'prop-types'


const Nav = (props) => {
  return (
    <nav className="w-full h-12 bg-gray-800 flex items-center">
      <div className="logo flex items-center m-auto">

        {props.logo?        // ternary operator 
            <img src={logo} className="w-10" alt="" />: ""
        }
        
        <span className="text-white">{props.title}</span>
      </div>
    </nav>
  );
};

export default Nav;

Nav.propTypes = {
    title: PropTypes.string,         // to validate the props
    logo: PropTypes.bool.isRequired       // this makes the prop compulsory
} 

Nav.defaultProps = {
    title: 'Your Title'            // if prop is not passed, then this default value is presented
}