import React from "react";
import Layout from "./components/layout/Layout";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createStore, applyMiddleware, compose } from "redux";
import appReducer from "./store/reducers/appReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import LandingPage from "./components/LandingPage";
import ApplicationBar from "./components/appBar/ApplicationBar";
import Authentication from './components/login/Authentication';
import Logout from './components/login/Logout'
import ErrorPopupContainer from "./shared/popups/ErrorPopupContainer";

const store = createStore(
  appReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ApplicationBar/>
        <ErrorPopupContainer/>
        <Switch>
          <Route path="/shop" component={Layout} />
          <Route path='/login' exact component={Authentication}></Route>
          <Route path='/logout' exact component={Logout}></Route>
          <Route path="/" exact component={LandingPage} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
