import React from 'react';
import Card from './Card';
import '../styles/cards.css';
import '../styles/game.css';

export default function GameBoard({ cards, flipped, matched, justMatched, onFlip, level, disabled }) {
  const cols = level.grid[0];

  return (
    <div className="board-container">
      <div className={`game-board grid-${cols}`}>
        {cards.map(card => (
          <div key={card.id} className="board-card-wrapper">
            <Card
              card={card}
              isFlipped={flipped.includes(card.id) || matched.includes(card.id)}
              isMatched={matched.includes(card.id)}
              isMatchAnim={justMatched && justMatched.pairId === card.pairId && matched.includes(card.id)}
              onClick={() => !disabled && onFlip(card.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
