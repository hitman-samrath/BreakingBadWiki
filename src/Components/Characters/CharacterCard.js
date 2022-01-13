import React from 'react'
import CharacterData from './CharacterData'
import Spinner from '../UI/Spinner'
import '../../App.css'

const CharacterCard = ({boxitem, loading}) => {
    return (loading) ? (
        <Spinner/> 
    ) : (
        <div className="cards">
            {
                boxitem.map ( (item) => ( <CharacterData item = {item}/> ) )
            }
        </div>
        
        )
}

export default CharacterCard