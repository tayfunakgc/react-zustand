import React from 'react'
import useNumberStore from '../app/numberStore'

const Navbar = () => {
    const numbers = useNumberStore(state => state.numbers)

    return (
        <div>
            <h1>Numbers Length: {numbers.length}</h1>
            <p>{numbers.length > 0 ? numbers.join('-') : '--'}</p>
        </div>
    )
}

export default Navbar