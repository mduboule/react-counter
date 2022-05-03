import React from 'react';

export default function Counter({counter, classes}) {
  return (
    <h1 className={classes}>{counter}</h1>
  )
}
