import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import store from './store/redux-store';
// import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
//Test
import Hook from './Test/Hook';

export const renderComponentsTree = () => {
  return ReactDOM.render(
    <React.StrictMode>
      <Router>
        {/* <Provider store={store}>
          <App />
        </Provider> */}
        <Hook />
      </Router>

    </React.StrictMode>,
    document.getElementById('root')
  );
}
renderComponentsTree();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
