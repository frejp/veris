import React from 'react';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import { Login } from './routes';
import { rootReducer } from './ducks';
import { Certification } from './routes/Certification';

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;

const App: React.FC = function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Route
          render={({ location }) => (
            <Switch location={location}>
              <Route component={Login} exact path="/" />
              <Route component={Certification} exact path="/works/:someId" />
            </Switch>
          )}
        />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
