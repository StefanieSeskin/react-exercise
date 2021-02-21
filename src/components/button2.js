import React, { useState, useEffect } from 'react';

const CounterButton = () => {
    const [count, setCount] = useState(0) 
    // useEffect(() => {}, [])
    useEffect(() => {
        if (count == 5){
            alert ('hello')
        } 
        // console.log('count', count)
    }, [count])
    function increment(e) {
        setCount(count + 1)
    }
    return <button onClick={ increment }>{ count }</button>
}

export default CounterButton