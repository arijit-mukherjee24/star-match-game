import React, { useState } from 'react';
import GameComponent from "./GameComponent";

function StarMatchComponent(props) {

    const [gameId, setGameId] = useState(1);
    
    return (
        <>
           <GameComponent 
                key={gameId} 
                startNewGame={() => setGameId(gameId + 1)}

            />; 
        </>
    );
}

export default StarMatchComponent;