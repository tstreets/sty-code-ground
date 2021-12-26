import React from 'react';
import './index.css';

const Solitaire = () => {
    // reset value
    const initialGame = {
        deck: new Array(52).fill({}),
        mill: [],
    };

    const [game, setGame] = React.useState(initialGame);

    // send top 3 cards to mill
    function millCards() {
        // restart mill if the deck is empty
        if (!game.deck.length) {
            restartMill();
            return;
        }
        const newDeck = game.deck.filter((c, i) => i >= 3);
        const newMill = [...game.mill, ...game.deck.filter((c, i) => i < 3)];
        setGame({ ...game, deck: newDeck, mill: newMill });
    }

    // send mill back to deck
    function restartMill() {
        const newDeck = [...game.mill];
        const newMill = [];
        setGame({ ...game, deck: newDeck, mill: newMill });
    }

    return (
        <React.Fragment>
            <h1>Solitaire</h1>
            <div style={{ userSelect: 'none' }}>Mill: {game.mill.length}</div>
            <div
                onClick={millCards}
                style={{ cursor: 'pointer', userSelect: 'none' }}
            >
                Deck: {game.deck.length}
            </div>
        </React.Fragment>
    );
};

export default Solitaire;
