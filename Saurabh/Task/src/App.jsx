import React from 'react'
import { Provider } from 'react-redux'
import Redux from './Redux/Redux'
import store from './store/Store'

export default function App() {
  return (
    <div>
      <Provider store={store}>
        <Redux/>
      </Provider>
    </div>
  )
}
