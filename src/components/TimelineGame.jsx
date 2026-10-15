import React, { useState, useMemo } from 'react';
import { ChevronLeft, Check, X, Star, RotateCcw, Clock, GripVertical, ChevronUp, ChevronDown } from 'lucide-react';

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function TimelineGame({ level, chapter, onBack, onFinish }) {
  const correctOrder = useMemo(() => level.cards.map((c, i) => ({ ...c, originalIndex: i })), [level]);
  const [playerOrder, setPlayerOrder] = useState(() => shuffleArray([...correctOrder]));
  const [submitted, setSubmitted] = useState(false);
  const [attempts, setAttempts] = useState(0);

  const handleMove = (idx, direction) => {
    const newOrder = [...playerOrder];
    const targetIdx = direction === 'up' ? idx - 1 : idx + 1;
    if (targetIdx < 0 || targetIdx >= newOrder.length) return;
    [newOrder[idx], newOrder[targetIdx]] = [newOrder[targetIdx], newOrder[idx]];
    setPlayerOrder(newOrder);
  };

  const handleSubmit = () => {
    setSubmitted(true);
    setAttempts(a => a + 1);
  };

  const correctCount = playerOrder.filter((c, i) => c.originalIndex === i).length;
  const allCorrect = correctCount === playerOrder.length;

  const handleRestart = () => {
    setPlayerOrder(shuffleArray([...correctOrder]));
    setSubmitted(false);
  };

  const handleReset = () => {
    setPlayerOrder(shuffleArray([...correctOrder]));
    setSubmitted(false);
    setAttempts(0);
  };

  return (
    <div className="content minigame-play">
      <button className="back-link" onClick={onBack}>
        <ChevronLeft size={16} /> Tornar als modes
      </button>

      <div className="timeline-header">
        <div className="eyebrow">LÍNIA DEL TEMPS</div>
        <h2 className="timeline-title">Ordena els conceptes en la seqüència correcta</h2>
        <p className="timeline-subtitle">Nivell {level.id}: {level.name}. Fes servir les fletxes per moure les fitxes.</p>
      </div>

      <div className="timeline-list">
        {playerOrder.map((card, idx) => {
          const isCorrect = submitted && card.originalIndex === idx;
          const isWrong = submitted && card.originalIndex !== idx;
          return (
            <div
              key={card.label}
              className={`timeline-item ${isCorrect ? 'correct' : ''} ${isWrong ? 'wrong' : ''}`}
            >
              <div className="timeline-item-position">
                <span className="timeline-number">{idx + 1}</span>
                <div className="timeline-arrows">
                  <button
                    className="timeline-arrow"
                    onClick={() => handleMove(idx, 'up')}
                    disabled={idx === 0 || submitted}
                  >
                    <ChevronUp size={16} />
                  </button>
                  <button
                    className="timeline-arrow"
                    onClick={() => handleMove(idx, 'down')}
                    disabled={idx === playerOrder.length - 1 || submitted}
                  >
                    <ChevronDown size={16} />
                  </button>
                </div>
              </div>
              <div className="timeline-item-content">
                <span className="timeline-label">{card.label}</span>
                {submitted && (
                  <span className="timeline-fact">{card.fact}</span>
                )}
              </div>
              <div className="timeline-item-status">
                {isCorrect && <Check size={16} className="status-correct" />}
                {isWrong && <X size={16} className="status-wrong" />}
              </div>
            </div>
          );
        })}
      </div>

      {submitted && (
        <div className={`timeline-result ${allCorrect ? 'perfect' : 'incomplete'}`}>
          {allCorrect ? (
            <>
              <Check size={20} />
              <span>Perfecte! Has ordenat tots els conceptes correctament.</span>
            </>
          ) : (
            <>
              <X size={20} />
              <span>{correctCount} de {playerOrder.length} correctes. Torna-ho a intentar.</span>
            </>
          )}
        </div>
      )}

      <div className="timeline-actions">
        {!submitted ? (
          <button className="primary" onClick={handleSubmit}>
            <Check size={16} /> Comprovar ordre
          </button>
        ) : (
          <>
            <button className="primary" onClick={handleRestart}>
              <RotateCcw size={16} /> Tornar a ordenar
            </button>
            <button className="secondary" onClick={handleReset}>
              Reiniciar
            </button>
          </>
        )}
      </div>
    </div>
  );
}
