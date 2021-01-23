import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store/store';
import { BrowserRouter as Router} from 'react-router-dom';


export const renderComponentsTree=()=>{
  return ReactDOM.render(
  <React.StrictMode>
    <Router>
    <App  state={store.state}  />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
}
renderComponentsTree();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
