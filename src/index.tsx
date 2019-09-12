import * as React from 'react';
import * as ReactDOM from 'react-dom'
import App from './App'
import ServiceWorker from './serviceWorker'
import { Provider } from 'react-redux'

ReactDOM.render(
  // <Provider store={store}>s
    <App />,
 // </Provider>,
  document.getElementById('root') as HTMLElement
);
ServiceWorker()