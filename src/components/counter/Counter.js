import React, {useState} from 'react'

function Counter() {
    const [number ,setNumber] = useState(0)
    return (
        <div>
            currentNumber is {number}
            <hr/>
            <button onClick={() => setNumber(number+1)}>Increase</button>
            <button onClick={() => setNumber(number-1)}>Decrease</button>

        </div>
    )
}

export default Counter;
