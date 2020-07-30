
const initialState = {
    counter: 0
};
//array ref type so we update it immutably

const reducer = (state = initialState ,action) => {

    switch(action.type){

        case 'INCREMENT':
            return{ //new / updated state
                ...state, //immutably updating state
                counter: state.counter + 1
            } 
        
        case 'DECREMENT':
            return{
                ...state,
                counter: state.counter - 1
            } 
        
        case 'ADD':
            return{
                ...state,
                counter: state.counter + action.val
            } 
        
        case 'SUBTRACT':
            return{
                ...state,
                counter: state.counter - action.val
            } 
    }
    return state; //default
};

export default reducer;