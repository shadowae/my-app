import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Counter } from './features/counter/Counter';
import './App.css';
import {store} from "./app/store";

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route store={store} component={Counter} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
