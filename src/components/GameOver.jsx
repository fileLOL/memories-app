import React from 'react';
import { Star, ArrowRight, RotateCcw, ChevronRight, BookOpen, Trophy, Clock, Target, Sparkles } from 'lucide-react';
import { getStarRating } from '../data/levels';

export default function GameOver({ level, chapter, moves, mistakes, timeElapsed, isComplete, mode, scores, onReplay, onBack, onNextLevel, facts }) {
  const stars = level ? getStarRating(moves, level.pairs, timeElapsed, level.timeLimit) : 0;
  const allPairsFound = level ? (isComplete && (moves > 0 || timeElapsed > 0)) : false;
  const timeUp = timeElapsed >= level.timeLimit;

  const formatTime = (s) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${String(sec).padStart(2, '0')}`;
  };

  return (
    <div className="content reveal-page">
      <div className="reveal-stars">✦ · ✧ · ✦</div>
      <div className="eyebrow centered">
        {timeUp && !allPairsFound ? 'TEMPS EXHIT' : 'ARXIU ACTUALITZAT'}
      </div>
      <h1>
        {timeUp && !allPairsFound ? <>El temps s'ha<br/><i>esgotat</i></> :
          <>Record completat<br/><i>de la boira</i></>}
      </h1>

      <div className="result-stats">
        <div className="result-stat">
          <Target size={20} />
          <small>MOVIMENTS</small>
          <strong>{moves}</strong>
        </div>
        <div className="result-stat">
          <Clock size={20} />
          <small>TEMPS</small>
          <strong>{formatTime(timeElapsed)}</strong>
        </div>
        <div className="result-stat">
          <Sparkles size={20} />
          <small>ENCERTS</small>
          <strong>{level ? Math.min(moves, level.pairs) : 0}/{level?.pairs || 0}</strong>
        </div>
      </div>

      {level && (
        <div className="result-stars">
          {[1, 2, 3].map(s => (
            <Star key={s} size={36} fill={s <= stars ? 'var(--gold)' : 'transparent'} color={s <= stars ? 'var(--gold)' : '#555'} />
          ))}
        </div>
      )}

      {mode === 'duo' && (
        <div className="result-players">
          <div className={`result-player ${scores[1] >= scores[2] ? 'winner' : ''}`}>
            <small>JUGADOR 1</small>
            <strong>{scores[1]}</strong>
            <span>parelles</span>
            {scores[1] >= scores[2] && <Trophy size={16} />}
          </div>
          <div className="result-vs">VS</div>
          <div className={`result-player ${scores[2] > scores[1] ? 'winner' : ''}`}>
            <small>JUGADOR 2</small>
            <strong>{scores[2]}</strong>
            <span>parelles</span>
            {scores[2] > scores[1] && <Trophy size={16} />}
          </div>
        </div>
      )}

      {facts && facts.length > 0 && (
        <div className="result-facts">
          <div className="eyebrow centered">FRAGMENTS DESBLOQUEJATS</div>
          <h3 style={{ textAlign: 'center', marginBottom: 16 }}>Fets històrics apresos</h3>
          <div className="facts-list">
            {facts.map((f, i) => (
              <div key={i} className="fact-item">
                <BookOpen size={16} />
                <div>
                  <b>{f.label}</b>
                  <p>{f.fact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="reveal-actions" style={{ justifyContent: 'center' }}>
        <button className="primary" onClick={onReplay}>
          <RotateCcw size={16} /> Tornar a jugar
        </button>
        {onNextLevel && (
          <button className="secondary" onClick={onNextLevel}>
            Següent nivell <ChevronRight size={16} />
          </button>
        )}
        <button className="secondary" onClick={onBack}>
          Triar nivell <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
