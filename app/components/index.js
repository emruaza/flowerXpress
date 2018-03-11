import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

ReactDOM.render(
  <App />,
  document.getElementById('xpress-main')
);

/** 
 * if changes happened inside src files tell webpack
 * to accept the updated module.
**/
module.hot && module.hot.accept();
