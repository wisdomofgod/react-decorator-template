import { createStore, applyMiddleware, compose, Middleware } from "redux";

import Reducer from "../reducers";


export var store = createStore(Reducer);
