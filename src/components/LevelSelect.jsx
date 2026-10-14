import React from 'react';
import { ChevronLeft, Lock, Star, ChevronRight, Play } from 'lucide-react';
import { chapters } from '../data/levels';

export default function LevelSelect({ onBack, onSelectLevel, progress, mode }) {
  const getProgress = (chapterId, levelId) => {
    const key = `${chapterId}-${levelId}`;
    return progress[key] || { stars: 0, completed: false };
  };

  return (
    <div className="content">
      <button className="back-link" onClick={onBack}>
        <ChevronLeft size={16} /> Tornar a l'inici
      </button>

      <div className="page-title">
        <div className="eyebrow">{mode === 'duo' ? 'MODE DOS JUGADORS' : 'CAMANYA EN SOLITARI'}</div>
        <h1>Tria el teu capítol</h1>
        <p>Quatre èpoques, setze nivells. Cada nivell completat desbloqueja un fragment de saber històric.</p>
      </div>

      <div className="level-select-list">
        {chapters.map((ch, ci) => (
          <div key={ch.id} className="level-chapter-block">
            <div className="level-chapter-header" style={{ borderColor: ch.color }}>
              <span className="chapter-tag" style={{ color: ch.color }}>{ch.symbol}</span>
              <div>
                <h2 style={{ color: ch.color }}>{ch.name}</h2>
                <small>{ch.era} · {ch.place}</small>
              </div>
            </div>

            <div className="level-cards">
              {ch.levels.map((lv, li) => {
                const prog = getProgress(ch.id, lv.id);
                const prevLevel = li > 0 ? getProgress(ch.id, ch.levels[li - 1].id) : null;
                const isLocked = mode === 'solo' && li > 0 && prevLevel && !prevLevel.completed;
                const canPlay = !isLocked;

                return (
                  <button
                    key={lv.id}
                    className={`level-card ${isLocked ? 'locked' : ''} ${prog.completed ? 'completed' : ''}`}
                    onClick={() => canPlay && onSelectLevel(ch, lv)}
                    disabled={isLocked}
                    style={canPlay ? { borderColor: ch.color + '60' } : {}}
                  >
                    <div className="level-card-top">
                      <span className="level-number">NIVELL {lv.id}</span>
                      {isLocked && <Lock size={14} />}
                      {prog.completed && <Star size={14} fill="var(--gold)" color="var(--gold)" />}
                    </div>
                    <h3>{lv.name}</h3>
                    <div className="level-meta">
                      <span>{lv.pairs} parelles</span>
                      <span>{lv.timeLimit}s</span>
                    </div>
                    <div className="level-stars">
                      {[1, 2, 3].map(s => (
                        <Star key={s} size={14} fill={s <= prog.stars ? 'var(--gold)' : 'transparent'} color={s <= prog.stars ? 'var(--gold)' : '#555'} />
                      ))}
                    </div>
                    {canPlay && !prog.completed && (
                      <div className="level-play"><Play size={14} /> Jugar</div>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="chapter-intro">
              <p>{ch.intro}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
