import React, { Component } from 'react';
import './ContentContainer.css';

class Home extends Component {
  render(){
    return(
      <div className='Content-Container'>
        <h1>Home</h1>
        <p>Welcome to the home page for this vanilla React demo.</p>
        <p>This site demonstrates routing, handlers, class-based components, and API requests using Axios. The API Demo page renders live data from the Open Meteo API (precipitation probability and day/night periods). Query parameters are retrieved from a static object. The CSS styling takes advantage of the cascade and root variables.</p>
      </div>
    );
  }
}

export default Home;