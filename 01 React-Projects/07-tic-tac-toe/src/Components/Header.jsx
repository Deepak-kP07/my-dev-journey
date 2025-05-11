import React from "react";
import { useState} from "react" ;

export default function Player({intialname , symbol , isActive , onChangeName}) {
    const [playerName , setPlayerName ] = useState(intialname);
    const [ isEditing , setIsEditing] = useState(false);
    function handleChange(event){
        setPlayerName(event.target.value);
    }
    function handleIsEditing(){
        setIsEditing((editing)=>!editing);
        if(isEditing){
            onChangeName(symbol,playerName);
        }

    }

    let editableplayerName =  <span className="player-name"> {playerName}  </span> ;
    if(isEditing){
        editableplayerName = <input type="text" required  value={playerName} onChange={handleChange} />;
    }
return (
    <li className={isActive ? 'active' : undefined}>
        <span className="player">
            {editableplayerName}
            <span className="player-symbol"> {symbol} </span>
        </span>
        <button onClick={handleIsEditing}> {isEditing ? "Save" : " Edit"} </button>
    </li>
)
}

