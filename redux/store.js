import { createStore } from "redux";  
import counterReducer from "./reducers/counterReducer.js";


const store = createStore(counterReducer)

export default store;


// counterReducer() => {count:0}

// store.dispatch({type: INCREASE}) 

// counterReducer( current value, action obj) 
// counterReducer( {count:0}, {type: INCREASE}) => {count:1}


// store.dispatch({type: INCREASE, value: 100})

// counterReducer( {count:1}, {type: INCREASE, value: 100}) => {count:103}