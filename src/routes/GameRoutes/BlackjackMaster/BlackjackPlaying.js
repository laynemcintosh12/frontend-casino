import React, { useEffect, useState, useCallback } from "react";
import Hand from './Hand';
import Actions from './Actions';
import Info from '../Info';

const BlackjackPlaying = ({ game, setGameState, setBalance }) => {
  const [playerHand, setPlayerHand] = useState([]);
  const [dealerHand, setDealerHand] = useState([]);
  const [showInfo, setShowInfo] = useState(false); // State to control info display

  const updatePlayerHand = useCallback(() => {
    setPlayerHand([...game.playerHand]);
  }, [game.playerHand]);

  const updateDealerHand = useCallback(() => {
    setDealerHand([...game.dealerHand]);
  }, [game.dealerHand]);

  useEffect(() => {
    const deal = async () => {
      await game.dealCards();
      updatePlayerHand();
      updateDealerHand();
      setGameState(game.gameState);
    };
    deal();
  }, [game, setGameState, updatePlayerHand, updateDealerHand]);

  useEffect(() => {
    updatePlayerHand();
    updateDealerHand();
  }, [game.playerHand, game.dealerHand, updatePlayerHand, updateDealerHand]);

  return (
    <div>
      <div className="container text-center"> 
        <button className="btn btn-info mb-2 mt-2" onClick={() => setShowInfo(!showInfo)}>Get Help</button>
        {showInfo && <Info gameType="blackjack" />}
        <Actions game={game} setBalance={setBalance} updatePlayerHand={updatePlayerHand} updateDealerHand={updateDealerHand} setGameState={setGameState} />
      </div>
      <div className="hand-container">
        <Hand hand={playerHand} total={game.playerHandTotal} name="Player Hand" />
        <Hand hand={dealerHand} total={game.dealerHandTotal} name="Dealer Hand" />
      </div>
    </div>
  );
};

export default BlackjackPlaying;
