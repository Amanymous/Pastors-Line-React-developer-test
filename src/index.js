import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
// import { createLogger } from 'redux-logger'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
// import { composeWithDevTools } from 'redux-devtools-extension'
import './index.css';

import App from './App';
import reducer from './redux/reducers/reducer'
import 'bootstrap/dist/css/bootstrap.css'

// import reportWebVitals from './reportWebVitals';

const store = createStore(
  reducer,
  applyMiddleware(thunk))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
