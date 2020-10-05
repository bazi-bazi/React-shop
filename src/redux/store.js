import { createStore, applyMiddleware } from "redux";
import { Reducer } from "./reducer";
import { logger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

export let store = createStore(
  Reducer,
  composeWithDevTools(applyMiddleware(logger))
);
