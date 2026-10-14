import React, { useState, useEffect } from 'react';
import { ChevronLeft, RotateCcw, Pause, Play, User, Users } from 'lucide-react';
import { useGameLogic } from '../hooks/useGameLogic';
import { getStarRating } from '../data/levels';
import GameBoard from './GameBoard';
import GameOver from './GameOver';

export default function GameScreen({ level, chapter, mode, onBack, onSaveProgress, onNextLevel, onReplay }) {
  const [showGameOver, setShowGameOver] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [collectedFacts, setCollectedFacts] = useState([]);
  const [toastFact, setToastFact] = useState(null);

  const {
    cards, flipped, matched, moves, mistakes, timeElapsed,
    isRunning, isComplete, isChecking, justMatched,
    currentPlayer, scores, flipCard
  } = useGameLogic(level, mode);

  useEffect(() => {
    if (justMatched && !collectedFacts.find(f => f.pairId === justMatched.pairId)) {
      setCollectedFacts(prev => [...prev, justMatched]);
      setToastFact(justMatched);
      setTimeout(() => setToastFact(null), 2500);
    }
  }, [justMatched]);

  useEffect(() => {
    if (isComplete && !showGameOver) {
      setTimeout(() => setShowGameOver(true), 800);
    }
  }, [isComplete]);

  const formatTime = (s) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${String(sec).padStart(2, '0')}`;
  };

  const getTimerClass = () => {
    if (!level) return '';
    const ratio = timeElapsed / level.timeLimit;
    if (ratio >= 0.9) return 'danger';
    if (ratio >= 0.7) return 'warning';
    return '';
  };

  const handleReplay = () => {
    onReplay && onReplay();
  };

  const handleBack = () => {
    if (isComplete && level) {
      const stars = getStarRating(moves, level.pairs, timeElapsed, level.timeLimit);
      if (onSaveProgress) {
        onSaveProgress(chapter.id, level.id, stars);
      }
    }
    onBack();
  };

  if (showGameOver) {
    return (
      <GameOver
        level={level}
        chapter={chapter}
        moves={moves}
        mistakes={mistakes}
        timeElapsed={timeElapsed}
        isComplete={isComplete}
        mode={mode}
        scores={scores}
        facts={collectedFacts}
        onReplay={handleReplay}
        onBack={onBack}
        onNextLevel={onNextLevel ? () => {
          setShowGameOver(false);
          onNextLevel();
        } : null}
      />
    );
  }

  return (
    <div className="game-page">
      <div className="game-header">
        <div className="game-header-left">
          <button className="icon-btn" onClick={onBack}>
            <ChevronLeft size={18} />
          </button>
          <div>
            <div className="game-chapter-tag">{chapter?.name}</div>
            <div className="game-level-name">{level?.name}</div>
          </div>
        </div>

        <div className="game-header-center">
          <div className="game-stat">
            <small>MOVIMENTS</small>
            <strong>{moves}</strong>
          </div>
          <div className={`game-timer ${getTimerClass()}`}>
            {formatTime(level ? level.timeLimit - timeElapsed : timeElapsed)}
          </div>
          <div className="game-stat">
            <small>PARELLES</small>
            <strong>{matched.length / 2}/{level?.pairs || 0}</strong>
          </div>
        </div>

        <div className="game-header-right">
          {mode === 'duo' && (
            <div className="mode-tag">
              <Users size={14} /> P{currentPlayer}
            </div>
          )}
          {mode === 'solo' && (
            <div className="mode-tag">
              <User size={14} />
            </div>
          )}
        </div>
      </div>

      {mode === 'duo' && (
        <div className="two-player-bar">
          <div className={`player-info ${currentPlayer === 1 ? 'active-player' : ''}`}>
            <div>
              <div className="player-name">Jugador 1</div>
              <div className="player-score"><b>{scores[1]}</b> parelles</div>
            </div>
          </div>
          <div className="turn-indicator">Torn del Jugador {currentPlayer}</div>
          <div className={`player-info ${currentPlayer === 2 ? 'active-player' : ''}`}>
            <div>
              <div className="player-name">Jugador 2</div>
              <div className="player-score"><b>{scores[2]}</b> parelles</div>
            </div>
          </div>
        </div>
      )}

      <GameBoard
        cards={cards}
        flipped={flipped}
        matched={matched}
        justMatched={justMatched}
        onFlip={flipCard}
        level={level}
        disabled={isChecking || isComplete}
      />

      {toastFact && (
        <div className="fact-toast">
          <span className="fact-icon">✦</span>
          <div>
            <div className="fact-label">{toastFact.label}</div>
            <div className="fact-text">{toastFact.fact}</div>
          </div>
        </div>
      )}
    </div>
  );
}
