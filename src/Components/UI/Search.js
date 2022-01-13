import '../../App.css'
import React, { useState } from 'react'


const Search = ({receivequery}) => {
const [text, puttext] = useState('')

const changes = (typed) => {
        puttext(typed)
        receivequery(typed)
}

    return (
        <section className="form">
            <form>
                <input className="form-control" 
                type="text" 
                placeholder="Search Characters"
                value={text}
                autoFocus
                onChange= {(e) => changes(e.target.value)} />
            </form>
        </section>
    )
}

export default Search