import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';


import { connect } from 'react-redux'; 
//connect is a fncn that returns a HOC

class Counter extends Component {
    
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {   
        return ( //props.ctr is comming from redux reducer file
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter}  />
                
                <hr/>
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(strRes => (
                         <li
                            key={strRes.id} 
                            onClick={() => this.props.onDeleteResult(strRes.id)}>
                             {strRes.value}
                         </li>
                    ))}
                </ul>  
            </div>
        );
    }
}


//state we want
//state will be given to us by redux
//executed by redux package
const mapStateToProps = state => {
    return{
        ctr : state.ctrReducer.counter ,  //taking value from reducer  
        storedResults : state.resReducer.results 
    };
};

// dispatch -> function in react-redux package which will call dispatch on store behind the scene
const mapDispatchToProps = dispatch => {
     return{
        onIncrrementCounter: () => dispatch({type:'INCREMENT'}),
        onDecrementCounter: () => dispatch({type:'DECREMENT'}),
        onAddCounter: () => dispatch({type:'ADD', val:5}),
        onSubtractCounter: () => dispatch({type:'SUBTRACT', val:5}),
        onStoreResult: (result) => dispatch({type:'STORE_RESULT',result: result}),
        onDeleteResult: (id) => dispatch({type:'DELETE_RESULT' , resultid:id})
     };
};

export default connect(mapStateToProps,mapDispatchToProps)(Counter);

/*
connect take 2 pieces of info
1st which part of the application state is interesting to us
2nd which actions do we want to dispatch
*/