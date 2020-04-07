import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//named imports with Alias
// import { App as MyApp, someFunction } from './App'

// default import
import App from './containers/App';

ReactDOM.render(<App />,
  document.getElementById('root')
);
