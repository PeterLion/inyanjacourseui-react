import React, { useState } from "react"

const Topics = () => {

    return <List />
}

const List = () => {
    const state = 'This is a list of topics. It is passed as props. Initialised state'
    const [msg, setMsg] = useState(state)
    const handleEvent = event => setMsg(event.target.value)
    return <div>
        <h1>{msg}</h1>
        <input type="text"
            value={msg}
            onChange={handleEvent}
        />
    </div>

}

export default Topics;