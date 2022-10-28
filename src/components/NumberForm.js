import React, { useState } from 'react'
import useNumberStore from '../app/numberStore'

const NumberForm = () => {

    const [number, setNumber] = useState('')
    /*
    const addNumber = useNumberStore(state => state.addNumber)
    const removeNumber = useNumberStore(state => state.removeNumber)
    const clearAllNumbers = useNumberStore(state => state.clearAllNumbers)
    */
    const { addNumber, removeNumber, clearAllNumbers, addNumberAsync } = useNumberStore(state => ({ 
        addNumber: state.addNumber, 
        removeNumber: state.removeNumber, 
        clearAllNumbers: state.clearAllNumbers ,
        addNumberAsync: state.addNumberAsync
    }))

    const handleAddNumber = () => {
        addNumber(number)
        setNumber('')
    }

    const handleAddNumberAsync = () => {
        addNumberAsync(number)
        setNumber('')
    }

    const handleRemoveNumber = () => {
        removeNumber(number)
        setNumber('')
    }

    const handleClearAllNumbers = () => {
        clearAllNumbers()
    }

    return (
        <div>
            <input type='number' value={number} onChange={e => setNumber(e.target.value)} />
            <br />
            <button onClick={handleAddNumber}>Add New Number</button>
            <br />
            <button onClick={handleAddNumberAsync}>Add New Number Async</button>
            <br />
            <button onClick={handleRemoveNumber}>Remove Number</button>
            <br />
            <button onClick={handleClearAllNumbers}>Clear All Numbers</button>
        </div>
    )
}

export default NumberForm