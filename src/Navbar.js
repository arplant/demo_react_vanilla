import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Themes.css';
import './Navbar.css';

class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = {isToggled: true};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt){
    evt.preventDefault();
    this.setState(evt => ({
      isToggled: !evt.isToggled
    }));
    this.props.handleTheme(!this.state.isToggled);
  }

render(){
  return(
    <div className={`Navbar ${(this.state.isToggled ? 'lightTheme' : 'darkTheme')}`}>
      <span className='Navbar-Links'>
        <Link to="/">Home</Link>
        <Link to="/API">API Demo</Link>
        <Link to="About">About</Link>
      </span>
        <span className='Navbar-Toggle'>
          <button onClick={this.handleChange}>Toggle Theme</button>
        </span>
    </div>
  );
}
}

export default Navbar;