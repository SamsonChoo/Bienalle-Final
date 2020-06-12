import React from 'react';

export default class ThickLine extends React.Component {
  render() {
    return (
      <svg
        width='320'
        height='10'
        viewBox='0 0 320 10'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <line y1='5' x2='320' y2='5' stroke='white' stroke-width='10' />
      </svg>
    );
  }
}
