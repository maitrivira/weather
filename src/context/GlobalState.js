import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  citys: [
    { id: 1642911, name: 'Jakarta' },
    { id: 1880252, name: 'Singapore' },
    { id: 1733046, name: 'Kuala Lumpur' },
    { id: 1609350, name: 'Bangkok' },
    { id: 2158177, name: 'Melbourne' },
  ],
  post:{}
};

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider value={{ citys: state.citys }}>
      {children}
    </GlobalContext.Provider>
  );
};
