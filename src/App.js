import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { GlobalProvider } from "./context/GlobalState";

// File
import City from './components/City';
import Detail from './components/Detail';

function App() {
  return (
    <GlobalProvider>
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
