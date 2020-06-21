import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { initialState as reducerInitialState, appReducer } from './store/reducers/appReducer'
import thunk from 'redux-thunk'

function render(
  ui,
  {
    initialState = reducerInitialState,
    store = createStore(appReducer, initialState),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'

// override render method
export { render }