import React from 'react';
import './index.css';

const Solitaire = () => {
    const suits = ['♣', '♦', '♠', '♥'];

    // generate a standard deck
    const initialDeck = suits.reduce((acc, suit) => {
        const retArr = [...acc];
        function getFace(value) {
            if (value === 1) return 'A';
            if (value === 11) return 'J';
            if (value === 12) return 'Q';
            if (value === 13) return 'K';
            return `${value}`;
        }
        for (let i = 1; i <= 13; i++) {
            retArr.push({
                value: i,
                face: getFace(i),
                suit: suit,
                id: `${suit}-${i}`,
            });
        }
        return retArr;
    }, []);

    // reset value
    const initialGame = {
        deck: initialDeck.sort(() => (Math.random() < 0.5 ? 1 : -1)),
        mill: [],
        lastMilled: [],
    };

    const [game, setGame] = React.useState(initialGame);

    // send top 3 cards to mill
    function millCards() {
        // restart mill if the deck is empty
        if (!game.deck.length) {
            restartMill();
            return;
        }
        const cardsMilled = game.deck.filter((c, i) => i < 3);
        const newDeck = game.deck.filter((c, i) => i >= 3);
        const newMill = [...game.mill, ...cardsMilled];
        setGame({
            ...game,
            deck: newDeck,
            mill: newMill,
            lastMilled: cardsMilled,
        });
    }

    // send mill back to deck
    function restartMill() {
        const newDeck = [...game.mill];
        const emptyPile = [];
        setGame({
            ...game,
            deck: newDeck,
            mill: emptyPile,
            lastMilled: emptyPile,
        });
    }

    // select card to play / move
    function selectMillCard(e) {
        const cardId = e.target.dataset.id;
        const newLastMilled = game.lastMilled.map(c => {
            if (c.id !== cardId && !c.selected) return c;
            if (c.id !== cardId) return { ...c, selected: false };
            return {
                ...c,
                selected: !c.selected,
            };
        });
        setGame({ ...game, lastMilled: newLastMilled });
    }

    return (
        <React.Fragment>
            <h1>Solitaire</h1>
            <div style={{ userSelect: 'none' }}>
                {game.lastMilled.map((c, i) => {
                    return (
                        <button
                            style={{
                                width: '75px',
                                height: '100px',
                                cursor: 'pointer',
                                borderColor: c.selected ? 'red' : null,
                            }}
                            key={`last-milled-${i}-${Date.now()}`}
                            data-id={c.id}
                            onClick={selectMillCard}
                        >
                            {c.face} {c.suit}
                        </button>
                    );
                })}
            </div>
            <button
                onClick={millCards}
                style={{
                    cursor: 'pointer',
                    width: '75px',
                    height: '100px',
                }}
            >
                Deck: {game.deck.length}
            </button>
        </React.Fragment>
    );
};

export default Solitaire;
