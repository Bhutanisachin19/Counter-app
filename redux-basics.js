//we will execute this file through node to show redux is a standalone lib

//importing like we do in node
const redux = require('redux');
const createStore = redux.createStore; //createStore is a function


//here we are creating js object though we can use just a number
const initialState = {
    counter: 0
}


//Reducer 
//it is a function which recieves 2 arguments 1st current state , 2nd action
const rootReducer = (state = initialState, action) => {
    //state = initialState default value i.e whenever undefined initialState will be used as the value of state
    //returns updated state usually

    if(action.type === 'INC_COUNTER'){
        return {
            //we dont mutate data directly , we create a copy using ...
            //...state this copys the old state in this object and then overrite the property we want to change
            ...state,
            counter: state.counter + 1
        };
    }
    
    if(action.type === 'ADD_COUNTER'){
        return {
            ...state,
            counter: state.counter + action.value
        };
    }
    return state; //this just returns the old state here
};


  


//Store
const store = createStore(rootReducer); // a store neeeds to be initaliz with a reducer
//console.log(store.getState());



  
//Subscription
//Subscription -> makes sure we dont have to manually call getState() its informs us that a state is changed
//subscribe() takes a fncn which will be execyted when a state is updated
store.subscribe(() => {
    //we can execute any code we want on state update
    console.log('[Subscription]' , store.getState()); 
});




//Dispatcher Action
//dispatch is a fncn which takes an argument (action) which should be a js object
//action should have a type property , all uppercase (not necessary)
//we can add other properties as we like
store.dispatch({type: 'INC_COUNTER'}); 
store.dispatch({type: 'ADD_COUNTER' , value: 10});

//console.log(store.getState());


