import React, { useState } from 'react'
import './counter.css'

const Counter = () => {
    const [value, setValue] = useState(0);

    const addONe = () => {
        setValue(value + 1)
    }

    const minusONe = () => {
        setValue(value - 1)
    }
    return (
        <div className='container'>
            <div> Counter</div>

            <div className='counter'>
                <button className='minusButton' onClick={minusONe} >minus -</button>
                <p>{value}</p>
                <button className='addButton' onClick={addONe}>add +</button>
            </div>
        </div>
    )
}

export default Counter;