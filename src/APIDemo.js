import React, { Component } from 'react';
import './ContentContainer.css';
import Weather from './Weather';
import { v4 as uuidv4 } from 'uuid';

const cragData = [

  {
    name: 'Ben Nevis',
    latitude: '56.7966',
    longitude: '-5.0039',
    elevation: 978,
    type: 'Mountaineering'
  },
  {
    name: 'Scafell Pike',
    latitude: '54.4558',
    longitude: '-3.2133',
    elevation: 970,
    type: 'Scrambling'
  },
  {
    name: 'Pen-y-ghent',
    latitude: '54.15',
    longitude: '-2.2',
    elevation: 694,
    type: 'Hiking'
  },
  {
    name: 'Whernside',
    latitude: '54.2295',
    longitude: '-2.4056',
    elevation: 978,
    type: 'Hiking'
  },
  {
    name: 'Ingleborough',
    latitude: '54.1664',
    longitude: '-2.3964',
    elevation: 726,
    type: 'Hiking'
  },
  {
    name: 'Almscliffe',
    latitude: '54.0833',
    longitude: '-1.1333',
    elevation: 224,
    type: 'Trad'
  },
  {
    name: 'Baildon',
    latitude: '53.8471',
    longitude: '-1.7878',
    elevation: 282,
    type: 'Trad'
  },
  {
    name: 'Ilkley',
    latitude: '53.9245',
    longitude: '-1.8233',
    elevation: 402,
    type: 'Trad'
  },
  {
    name: 'Heptonstall',
    latitude: '53.7491',
    longitude: '-2.0209',
    elevation: 449,
    type: 'Trad'
  },
];


class APIDemo extends Component {
  render(){

    //Use map to generate Weather components
    //Pass name, lat and long as props

    const cragList = cragData.map((c) =>
      <Weather
      name={c.name}
        latitude={c.latitude}
        longitude={c.longitude}
        elevation={c.elevation}
        type={c.type}
        key={uuidv4()}/>
      );


    return (
      <div className='Content-Container'>
        <h1>API Demo</h1>
        <h4>Visualising weather data from <a href="https://open-meteo.com/">Open-Meteo</a></h4>
        <h3>Weather Information</h3>
        <h4>Precipitation probability with day-night overlay</h4>
        {/* <Weather /> */}
        {cragList}
      </div>
    );
  }
}

export default APIDemo;