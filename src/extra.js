import React from 'react';
import ReactDOM from 'react-dom';

export default function Hello() {
  return <h1>Hi</h1>;
}

ReactDOM.render(<Hello />, document.getElementById('root'));