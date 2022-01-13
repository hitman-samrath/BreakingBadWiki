import React from 'react'
import '../../App.css'

const CharacterData = ({item}) => {
    return (
        <div className="card">
            <div className="card-inner">
                <div className="card-front">
                    <img src={item.img} alt='Image failed to load'/>
                </div>
                <div className="card-back">
                    <h1>{item.name}</h1>
                    <ul>
                        <li><strong>Character Name: </strong>{item.portrayed}</li>
                        <li><strong>Nickname: </strong>{item.nickname}</li>
                        <li><strong>Birthday: </strong>{item.birthday}</li>
                        <li><strong>Status: </strong>{item.status}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CharacterData