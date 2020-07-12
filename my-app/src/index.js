import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import HomePage from './Home';
import './index.css';
import PlaceHolder from './PlaceHolder';

ReactDOM.render(
  <React.StrictMode>
    {/* <PlaceHolder title='Title here' subtitle='Subtitle here' color='#FFCC19' /> */}
    <HomePage></HomePage>
  </React.StrictMode>,
  document.getElementById('root')
);
