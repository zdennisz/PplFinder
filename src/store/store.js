import { createStore, combineReducers, applyMiddleware } from "redux";
import { users } from "store/reducers";
import { api } from "store/middleware";

const rootReducer = combineReducers({
  users,
});

const store = createStore(rootReducer, applyMiddleware(api));

export default store;
