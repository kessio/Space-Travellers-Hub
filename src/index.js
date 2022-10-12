import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
<<<<<<< HEAD
import App from './App';
import store from './redux/configureStore';
=======
import { BrowserRouter as Router } from 'react-router-dom';
import store from './redux/configureStore';
import App from './App';
>>>>>>> 4685b3fa623a78471ce5e084e33ea8b5a7347b90

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
<<<<<<< HEAD
      <App />
    </Provider>

  </React.StrictMode>,
);
=======
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
);


>>>>>>> 4685b3fa623a78471ce5e084e33ea8b5a7347b90
