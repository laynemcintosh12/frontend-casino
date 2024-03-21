import React from 'react';

const Info = ({ gameType }) => {
    const getInfoContent = () => {
        switch (gameType) {
            case 'blackjack':
                return (
                    <div>
                        <h2>Blackjack Information</h2>
                        <p>Blackjack is a popular card game played in casinos. The goal of the game is to beat the dealer's hand without going over 21.</p>
                        <p>Players are dealt two cards initially and have the option to "hit" (receive another card) or "stand" (keep their current hand).</p>
                        <p>If the player's hand exceeds 21, they bust and lose the game. If the player's hand is closer to 21 than the dealer's hand, they win.</p>
                        <p>After receiving a players first 2 cards, a player receives the option to double their bet.</p>
                    </div>
                );
            case 'poker':
                return (
                    <div>
                        <h2>Poker Information</h2>
                        <p>Poker is a family of card games that combines gambling, strategy, and skill. There are many variations of poker, each with its own rules and strategies.</p>
                        <p>Common types of poker include Texas Hold'em, Omaha, and Seven-Card Stud.</p>
                        <p>In poker, players compete against each other by making bets with poker chips or money. The goal is to have the best hand or to bluff other players into folding.</p>
                    </div>
                );
            // Add more cases for other game types if needed
            default:
                return <div>No information available for this game type.</div>;
        }
    };

    return (
        <div className="info">
            {getInfoContent()}
        </div>
    );
};

export default Info;
