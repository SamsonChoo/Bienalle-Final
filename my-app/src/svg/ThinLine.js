import React from 'react';

export default class ThinLine extends React.Component {
  render() {
    return (
      <svg
        width='300'
        height='5'
        viewBox='0 0 300 5'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <line y1='2.5' x2='300' y2='2.5' stroke='white' stroke-width='5' />
      </svg>
    );
  }
}
