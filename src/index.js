 import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';



import {createStore , combineReducers} from 'redux';
import counterReducer from"./store/reducer/counter";
import resultReducer from"./store/reducer/result";
import { Provider } from 'react-redux';


//combining the 2 reducers
const rootReducer = combineReducers({
    ctrReducer: counterReducer,
    resReducer: resultReducer
});


const store = createStore(rootReducer); 

//Provide -> to use react with redux 
//it allows us to inject our store into react component ,
// it takes a prop store={our created store}
ReactDOM.render(
<Provider store={store}> <App /> </Provider>,
  document.getElementById('root')
);


serviceWorker.unregister();
