import React from 'react'
import '../../App.css'
import spinner from '../../Assets/loading.gif'



const Spinner = () => {
    return (
        <img
        className='spinner'
        src={spinner}
        alt='Loading'
        />
    )
}

export default Spinner
