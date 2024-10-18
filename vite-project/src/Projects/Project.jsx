import React from 'react'
import Redux from './ReduxProject/Redux/Redux'
import { Provider } from 'react-redux';
import store from '../Projects/ReduxProject/app/Store';

export default function Project() {
  return (
    <>
      <Provider store={store}>
        <Redux />
      </Provider>,
    </>
  )
}