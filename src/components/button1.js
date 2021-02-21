import React, { useState, useEffect } from 'react';

// const initialState = {todos: [], count: 0, banana: false};
// const store = createContext(initialState);
// export const { button1 } = store;

// const id = () => Math.random().toString() + '-' + 
// Math.random.toString()

// function countReducer(state, action) {
//     Switch(action.type) { 
//     case 'INCREMENT_COUNT_BY':
//         return {...state, count: state.count + 1}
//     };
// }

const CounterButton = () => {
    const [count, setCount] = useState(0) 
    function increment(e) {
        setCount(count + 1)
    }
    return <button onClick={ increment }>{ count }</button>
}

export default CounterButton
