import React, { useEffect } from 'react'
import { useState } from 'react'

function Counter() {
    const [state, setState] = useState(0)
    useEffect(() => {
        console.log('mounted')
        console.log(' updated mounted'+state)
        return () => {
            console.log(`unmounted ${state}`)
        }
    },[state])
    const addOnClick=() => {
        setState( state + 1)
    }

    return (
        <div>
           <h1>Counter:{state} </h1>
           <button onClick={addOnClick}>add</button>
        </div>
    )
}

export default Counter
