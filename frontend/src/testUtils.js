import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { initialState as reducerInitialState, appReducer } from './store/reducers/appReducer'
import { Router } from 'react-router'
import { createMemoryHistory } from 'history'

function render(
  ui,
  {
    initialState = reducerInitialState,
    store = createStore(appReducer, initialState),
    ...renderOptions
  } = {},
  history = createMemoryHistory()
) {
  function Wrapper({ children }) {
    return <Provider store={store}><Router history={history}>{children}</Router></Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'

// override render method
export { render }