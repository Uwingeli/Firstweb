import React, { useState, useEffect} from 'react';

function Effect() {
    const [count, setCount] = useState(0);

    function addCount() {
        setCount(oldcount => oldcount + 1);
    }

    return (
        <p>Count: {count}</p>
        <button onClick={addCount}>add</button>

    );

}