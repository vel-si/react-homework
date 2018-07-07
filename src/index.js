import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//function Hello() {
//  let buk = "Wrld"
//  return (
//    <h1>Hello {buk}!</h1>
//  )
//}
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

