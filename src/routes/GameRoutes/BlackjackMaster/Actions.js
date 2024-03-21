import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

const Actions = ({ game, setBalance, updatePlayerHand, updateDealerHand, setGameState }) => {
    const [currentBet, setCurrentBet] = useState(0);
    const [hitStandClicked, setHitStandClicked] = useState(false);

    const handleDoubleBet = async () => {
        let token = localStorage.getItem("token");
        let decoded = jwtDecode(token);
        await game.doubleBet(decoded.username);
        setBalance(game.balance);
    };

    const handleHit = async () => {
        await game.hit();
        updatePlayerHand();
        setHitStandClicked(true); // Mark Hit button as clicked
        // Delay for 1 second
        await new Promise(resolve => setTimeout(resolve, 1000));
        setGameState(game.gameState);
    }
    
    const handleStand = async () => {
        await game.stand(updateDealerHand);
        updatePlayerHand();
        setHitStandClicked(true); // Mark Stand button as clicked
        // Delay for 1 second
        await new Promise(resolve => setTimeout(resolve, 1000));
        setGameState(game.gameState);
    }

    useEffect(() => {
        setCurrentBet(game.currentBet);
    }, [game.currentBet, setBalance]);

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card bg-dark text-white p-3 rounded">
                        <h3 className="text-center">Current Bet: {currentBet}</h3>
                        <div className="row justify-content-center">
                            <button className="btn btn-primary mr-2" onClick={handleHit}>Hit</button>
                            <button className="btn btn-primary mr-2" onClick={handleStand}>Stand</button>
                            <button className="btn btn-secondary mr-2" onClick={handleDoubleBet} disabled={currentBet * 2 > game.balance || hitStandClicked}>Double Bet</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Actions;

