import React from 'react';

import Component from './Component';

const goalsArr = [
  { title: '1', subtitle: '1111', img: 'http://www.material-ui.com/images/nature-600-337.jpg' },
  { title: '2', subtitle: '222222222', img: 'http://www.material-ui.com/images/nature-600-337.jpg' },
  { title: '3', subtitle: '3333', img: 'http://www.material-ui.com/images/nature-600-337.jpg' },
  { title: '4', subtitle: '4444444444', img: 'http://www.material-ui.com/images/nature-600-337.jpg' },
];
const WrappedComponent = () =>(
  <Component goals={goalsArr} />
);
export default WrappedComponent;
