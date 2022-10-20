import React, { useState } from 'react'
import Counter from './counter'

function Show() {
    const [state, setState] = useState(false)
    return (
        <div>
            <h1 onClick={() => setState(!state)}>show/hide</h1>
           {state && <Counter /> } 
        </div>
    )
}

export default Show
