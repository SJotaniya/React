import React from 'react';
import { Provider } from 'react-redux';
import MoneyManager from './redux/MoneyManager';
import { store } from './app/store';

export default function App() {
  return (
    <div>
      <Provider store={store}>
        <MoneyManager />
      </Provider>
    </div>
  );
}
