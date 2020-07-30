
const initialState = {
    counter: 0,
    results:[]
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

        case 'STORE_RESULT':
            return{
                ...state,
                results: state.results.concat({id:new Date(), value:state.counter}) //updating state immutably
            }

        case 'DELETE_RESULT':
            // filter -> returns a new array which will help us to change it immmutably
            //fiter takes a function which is executed on each element to check whether the element should be in the new array or not
            const updatedArray = state.results.filter(result => result.id !== action.resultid);
            return{
                ...state,
                results : updatedArray
            }
    }
    return state; //default
};

export default reducer;


//we were using this before seperating this file into 2 reducers just to see how we can do that
