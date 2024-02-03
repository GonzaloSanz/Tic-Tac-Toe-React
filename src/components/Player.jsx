import { useState } from "react";

const Player = ({ initialName, symbol, isActive, onChangeName }) => {

    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(prevIsEditing => !prevIsEditing);

        if(isEditing) {
            onChangeName(symbol, playerName);
        }
    }

    return <li className={isActive ? 'active' : undefined}>
        <span className="player">
            {isEditing ? (
                <input
                    type="text"
                    required
                    value={playerName}
                    onChange={e => setPlayerName(e.target.value)}
                />
            ) : (
                <span className="player-name">{playerName}</span>
            )}

            <span className="player-symbol">{symbol}</span>
        </span>

        <button
            onClick={() => handleEditClick()}
        >{isEditing ? 'Guardar' : 'Editar'}</button>
    </li>

}

export default Player;