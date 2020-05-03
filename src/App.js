import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { GlobalProvider } from "./context/GlobalState";

// File
import City from './components/City';
import Detail from './components/Detail';
import store from './store.js';

function App() {
  return (
    <GlobalProvider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path='/' component={City} exact />
          <Route path="/detail/:id" component={Detail}/>
        </Switch>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
