import React, { Component } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import APIDemo from './APIDemo';
import About from "./About";
import Navbar from './Navbar';
import PageNotFound from './PageNotFound';
import Footer from './Footer';
import './Themes.css';
import './Main.css';

class Main extends Component {
  constructor(props){
    super(props);
    this.state={theme: true};
    this.handleTheme = this.handleTheme.bind(this);
  }

  handleTheme(evt){
    this.setState(st => ({
      theme: evt
    }));
  }

  render(){
    return(
      <div className={`Main-PageContainer ${(this.state.theme ? 'lightTheme' : 'darkTheme')}`}>
        <div className='Main-NavbarContainer'>
          <Navbar handleTheme={this.handleTheme}/>
        </div>
        {/* <div id="pageUp"></div> */}
        <div className='Main-BodyContainer'>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/API" element={<APIDemo/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/404" element={<PageNotFound />} />
            <Route path="*" element={<Navigate to="/404" />} />
          </Routes>
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default Main;