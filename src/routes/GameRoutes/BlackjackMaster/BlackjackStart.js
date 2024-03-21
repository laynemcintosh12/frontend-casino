import React, { useState, useEffect } from "react";
import { jwtDecode } from 'jwt-decode';

const BlackjackStart = ({ game, setGameState, setBalance }) => {
    const [inputBet, setInputBet] = useState(0); 

    useEffect(() => {
        setInputBet(game.startingBet);
        console.log(game.startingBet)
        setBalance(game.balance);
    }, [game.balance, game.startingBet, setBalance]); 


    const handleStart = async () => {
        const startingBet = parseInt(inputBet); // Parse inputBet to integer
        if (startingBet === 0 || isNaN(startingBet)) {
            alert("You must place a valid bet to start the game!");
        } 
        else if (startingBet > game.balance) { // Check if bet exceeds balance
            alert("Your bet cannot exceed your balance!");
        }
        else {
            let token = localStorage.getItem("token");
            let username = jwtDecode(token).username;
            game.increaseBet(startingBet, username).then(async () => {
                await game.startGame((inputBet));
                setGameState(game.gameState);
                await game.getBalance();
                setBalance(game.balance);
            });
        }
    }

    const handleInputChange = (e) => {
        setInputBet(e.target.value); // Update inputBet state
    }

    return (
        <div className="d-flex justify-content-center"> 
            <div className="text-center bg-dark rounded p-4 mt-3" style={{ width: '50%' }}>
                <h6 className="text-white mb-4">Input your starting bet below!</h6>
                <input 
                    type="number" 
                    className="form-control mb-4" 
                    value={inputBet} 
                    onChange={handleInputChange} 
                    min="0"
                />
                <button className="btn btn-success btn-block" onClick={handleStart}>Start</button>
            </div>
        </div>
    )
}

export default BlackjackStart;
