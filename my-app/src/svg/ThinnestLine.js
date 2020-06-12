import React from 'react';

export default class ThinnestLine extends React.Component {
  render() {
    return (
      <svg
        width='320'
        height='2'
        viewBox='0 0 320 2'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <line y1='1' x2='320' y2='1' stroke='white' stroke-width='2' />
      </svg>
    );
  }
}
