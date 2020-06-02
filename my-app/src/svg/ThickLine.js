import React from 'react';

export default class ThickLine extends React.Component {
  render() {
    return (
      <svg
        width='300'
        height='10'
        viewBox='0 0 300 10'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <line y1='5' x2='300' y2='5' stroke='white' stroke-width='10' />
      </svg>
    );
  }
}
