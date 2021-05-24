import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import setAuthToken from "./utils/setAuthToken";
import reducers from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  {},
  composeEnhancers(applyMiddleware(thunk))
);

//current state of store
//Initial state at first render
let currentState = store.getState();

//Set proper authroization header every time the boolean value of token changes
store.subscribe(() => {
  const prev = currentState;
  currentState = store.getState();

  if (prev.user.token !== currentState.user.token) {
    setAuthToken(currentState.user.token);
  }
});

export default store;
