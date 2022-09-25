import { createStore } from "@reduxjs/toolkit";
import counterReducer from "./services/reducers/counterReducer";

const store = createStore(counterReducer)
export default store;