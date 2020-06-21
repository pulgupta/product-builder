import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import {
  initialState as reducerInitialState,
  appReducer,
} from "./store/reducers/appReducer";
import thunk from "redux-thunk";
import { createMemoryHistory } from "history";
import { Router } from "react-router";

function render(
  ui,
  {
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] }),
    initialState = reducerInitialState,
    store = createStore(appReducer, initialState, applyMiddleware(thunk)),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <Router history={history}>{children}</Router>
      </Provider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";

// override render method
export { render };
