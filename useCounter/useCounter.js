import { useState } from 'react';

 export const useCounter = (initialValue = 10) => {
    

    const [counter, setCounter] = useState(initialValue);

    const incement = (value = 1) => {
        // setCounter(counter+value);  se agrega el current para usar el valor actual
        setCounter((courrent) => courrent + value);
    }
    const decrement = (value = 1) => {
        if(counter === 0)return;
        setCounter(counter-value);
        setCounter( (current) => current -value);
    }
    const reset = () => {
        setCounter(initialValue);
    }

    return {
        counter,
        incement,
        decrement,
        reset,
    }
}