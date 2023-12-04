import React, { Component } from 'react';
import './Footer.css';
import { v4 as uuidv4 } from 'uuid';

// Icon/logo import
import html_icon from '../src/assets/HTML5_icon.png';
import css_icon from '../src/assets/CSS3_icon.png';
import react_icon from '../src/assets/React_icon.png';
import nodejs_icon from '../src/assets/Nodejs_icon.png';

class Footer extends Component {
  constructor(props){
    super(props);
  }

render(){
  const logos = [
    html_icon,
    css_icon,
    react_icon
    //,nodejs_icon
  ];
  const logosList = logos.map((logo) =>
  <img src={logo} key={uuidv4()}/>
  );
  
  return(
      <footer className='Footer-Logos'>
        {logosList}
      </footer>
    );
  }
}

export default Footer;



// renderPageNumbers(pageNumbersArray) {

//   return pageNumbersArray.map((pageNumber, index) => {
//      return (
//         <li key={index}><a href=""></a>{pageNumber}</li>
//      );
//   });
// }