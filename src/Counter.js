import React, { useState } from 'react'

export default function Counter() {
    const [value, setValue] = useState(0)
    const [input, setInput] = useState('')
    return (
        <div>
            <button data-testid='magical' onClick={() => setValue(value + 1)}>+</button>
            <span data-testid='element1'>{value}</span>

            <input data-testid="helperguy" type='text' value={input} onChange={e=>setInput(e.target.value)}/>
            <button data-testid='super-magical' onClick={()=>setValue(value + Number(input))}>Increament by Value</button>
        </div>
    )
}
