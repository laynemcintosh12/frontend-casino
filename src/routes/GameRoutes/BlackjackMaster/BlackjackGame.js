import React, { useState, useEffect } from 'react';
import BlackjackClass from '../../../BlackjackClass';
import BlackjackStart from './BlackjackStart';
import BlackjackPlaying from './BlackjackPlaying';
import BlackjackEnd from './BlackjackEnd';

const BlackjackGame = ({ setBalance }) => {
    const [game, setGame] = useState(null);
    const [gameState, setGameState] = useState(null);

    useEffect(() => {
        const newGame = new BlackjackClass();
        setGame(newGame);
        setGameState(newGame.gameState);
        newGame.getBalance();
    }, []);

    if (!game) {
        // Render loading state or return null
        return <div>Loading...</div>;
    }

    return (
        <div className='text-center mt-3 text-white'>
            <h1>Black Jack</h1>
            <div className="text-center">
                {gameState === 'start' && (
                    <div className="text-center">
                        <BlackjackStart game={game} setGameState={setGameState} setBalance={setBalance} />
                    </div>
                )}
                {['playing', 'drawing'].includes(gameState) && (
                    <div className="text-center">
                        <BlackjackPlaying 
                            game={game} 
                            setGameState={setGameState} 
                            setBalance={setBalance} 
                        />
                    </div>
                )}
                {!['start', 'playing', 'drawing'].includes(gameState) && (
                    <div className="text-center">
                        <BlackjackEnd game={game} setGameState={setGameState} setBalance={setBalance} />
                    </div>
                )}
            </div>
        </div>
    )
}

export default BlackjackGame;
