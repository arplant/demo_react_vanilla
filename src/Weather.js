import React, { Component } from 'react';
import axios from 'axios';
import './Weather.css';
import { v4 as uuidv4 } from 'uuid';

const API_URL_BASE = `https://api.open-meteo.com/v1/forecast`;
const timeFrame = 72;
const weatherXScale = 15;
const weatherXdim = timeFrame*weatherXScale;
const weatherYdim = 200;
const weatherYScale = weatherYdim/100;

let dayState = Array.apply(null, Array(timeFrame));
let precipState = Array.apply(null, Array(timeFrame));

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDay: dayState,
      precipProb: precipState
    };
  }

  async componentDidMount(){
    const params = {
      latitude: this.props.latitude,
      longitude: this.props.longitude,
      elevation: this.props.elevation,
      hourly: ['is_day', 'precipitation_probability']
      };
    await axios.get(API_URL_BASE, {params}).then(response => {
      this.setState({
        isDay: response.data.hourly.is_day.slice(0,timeFrame),
        precipProb: response.data.hourly.precipitation_probability.slice(0,timeFrame),
      });
    });
  }

  // async componentDidUpdate(){
  //   p = this.state.precipProb.slice();
  // }

  render(){
    //Return precipitation forecast as vertical bars
    const pList = this.state.precipProb.map((i) =>
      <div className='Weather-Precip-Bar'
        key={uuidv4()}
        style={{ height: i*weatherYScale,
        zIndex:'3', }}>
      </div>
      );

      const pMask = this.state.isDay.map((j) =>
      <div className='Weather-Day-Bar'
        style={{ height: j*weatherYdim,
          width: weatherXdim
        }}
        key={uuidv4()}>
      </div>
      );

    return (
      <div className='Weather' id={this.props.name}>
        <h3>{this.props.name}</h3>
          <div className='Weather-Precip'
          style={{ width: weatherXdim,
          height: weatherYdim }}>
            {pList}
          </div>
          <div className='Weather-Mask'
          style={{ width: weatherXdim,
          height: weatherYdim }}>
            {pMask}
          </div>
          <div className='Weather-Overlay'
          style={{ width: weatherXdim,
          height: weatherYdim }}>
            <h3>{this.props.name}  -  {this.props.elevation}m  -  {this.props.type}</h3>
          </div>
      </div>
    );
  }
}

export default Weather;

// render(){
//   const logos = [
//     html_icon,
//     css_icon,
//     react_icon,
//     nodejs_icon
//   ];
//   const logosList = logos.map((logo) =>
//   <img src={logo}/>
//   );
  
//   return(
//       <div className='Footer-Logos'>
//         {logosList}
//       </div>
//     );
//   }
// }