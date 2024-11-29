import React from 'react'
import { Provider } from 'react-redux'
import { store } from './App/Store'
import ReduxTodo from './Redux/Reduxtodo'

export default function App() {
  return (
    <div>
      <Provider store={store}>
        <ReduxTodo/>
      </Provider>
    </div>
  )
}