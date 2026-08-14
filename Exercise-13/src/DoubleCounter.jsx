import { useReducer } from "react"

// initial state
    const initialState = {counterA: 0, counterB: 0}
// reducer
const reducer = (state, action) => {
    switch(action.type) {
        case "INCREMENT_A" : 
        return{...state,
        counterA: state.counterA + 1 }
        case "DECREMENT_A" :
        return {...state,
         counterA: state.counterA - 1}
        case "INCREMENT_B" :
        return {...state,
        counterB: state.counterB + 1}
        case "DECREMENT_B" :
        return {...state,
        counterB: state.counterB - 1}
        case "reset":
        return initialState;
        default :
        return state;
    }
}    

export const DoubleCounter = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return(
        <>
        <h2>Double Counter</h2>
        <h3>Counter A: {state.counterA}</h3>
        <button onClick={()=> dispatch({type:"DECREMENT_A"})}
        disabled={state.counterA === 0}
        >-A</button>
        <button onClick={()=> dispatch({type:"INCREMENT_A"})}>+A</button>

        <h3>Counter B: {state.counterB}</h3>

        <button onClick={()=> dispatch({type:"DECREMENT_B"})}
        disabled={state.counterB === 0}
        >-B</button>
        <button onClick={()=> dispatch({type:"INCREMENT_B"})}>+B</button> <br />
        <button onClick={()=> dispatch({type:"reset"})}>Reset Both</button>
        </>
    )
}