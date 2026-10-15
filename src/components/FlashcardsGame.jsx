import React, { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight, RotateCcw, Check, RotateCw, Eye, Star } from 'lucide-react';
import * as Icons from 'lucide-react';

const iconMap = {
  Sword: Icons.Sword, Shield: Icons.Shield, Castle: Icons.Castle,
  Crown: Icons.Crown, ScrollText: Icons.ScrollText, Anchor: Icons.Anchor,
  Flame: Icons.Flame, Columns: Icons.Columns, Gem: Icons.Gem,
  Flag: Icons.Flag, Trophy: Icons.Trophy, Eye: Icons.Eye,
  Compass: Icons.Compass, Star: Icons.Star, BookOpen: Icons.BookOpen,
  Feather: Icons.Feather, Sun: Icons.Sun, Map: Icons.Map,
  Tree: Icons.TreePine,
  Mortar: Icons.Beaker, Waves: Icons.Waves, Mountain: Icons.Mountain,
  Moon: Icons.Moon, Flower: Icons.Flower, LeafyGreen: Icons.Leaf,
  Apple: Icons.Apple, Cross: Icons.Cross, Wind: Icons.Wind,
  Cherry: Icons.Cherry,
};

function getIcon(name) {
  return iconMap[name] || Icons.Sparkles;
}

export default function FlashcardsGame({ level, chapter, onBack, onFinish }) {
  const cards = useMemo(() => level.cards, [level]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [learned, setLearned] = useState(new Set());
  const [review, setReview] = useState(new Set());

  const card = cards[currentIdx];
  const Icon = getIcon(card.icon);
  const totalLearned = learned.size;
  const progress = (totalLearned / cards.length) * 100;
  const allLearned = totalLearned === cards.length;

  const handleFlip = () => setFlipped(f => !f);

  const handleLearned = () => {
    setLearned(prev => new Set([...prev, currentIdx]));
    setReview(prev => {
      const n = new Set(prev);
      n.delete(currentIdx);
      return n;
    });
    goNext();
  };

  const handleReview = () => {
    setReview(prev => new Set([...prev, currentIdx]));
    setLearned(prev => {
      const n = new Set(prev);
      n.delete(currentIdx);
      return n;
    });
    goNext();
  };

  const goNext = () => {
    setFlipped(false);
    if (currentIdx < cards.length - 1) {
      setCurrentIdx(i => i + 1);
    }
  };

  const goPrev = () => {
    setFlipped(false);
    if (currentIdx > 0) {
      setCurrentIdx(i => i - 1);
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setFlipped(false);
    setLearned(new Set());
    setReview(new Set());
  };

  return (
    <div className="content minigame-play">
      <button className="back-link" onClick={onBack}>
        <ChevronLeft size={16} /> Tornar als modes
      </button>

      <div className="flash-header">
        <div className="eyebrow">FITXES DE MEMÒRIA</div>
        <h2 className="flash-title">{chapter?.name} — Nivell {level.id}</h2>
        <div className="flash-progress">
          <span>{totalLearned} de {cards.length} apreses</span>
          <div className="flash-progress-bar">
            <div style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>

      {allLearned && (
        <div className="flash-complete">
          <Check size={20} />
          <span>Totes les fitxes apreses! Ja coneixes tots els conceptes d'aquest nivell.</span>
        </div>
      )}

      <div className="flash-card-area">
        <div className={`flash-card ${flipped ? 'flipped' : ''}`} onClick={handleFlip}>
          <div className="flash-card-inner">
            <div className="flash-card-back">
              <div className="flash-card-back-pattern">
                <span>{chapter?.symbol}</span>
              </div>
              <div className="flash-card-back-hint">Toca per descobrir</div>
            </div>
            <div className="flash-card-front">
              <Icon size={36} strokeWidth={1.5} className="flash-card-icon" />
              <div className="flash-card-label">{card.label}</div>
              <div className="flash-card-fact">{card.fact}</div>
            </div>
          </div>
        </div>

        <div className="flash-card-number">
          Fitxa {currentIdx + 1} de {cards.length}
        </div>
      </div>

      <div className="flash-nav">
        <button className="secondary" onClick={goPrev} disabled={currentIdx === 0}>
          <ChevronLeft size={16} /> Anterior
        </button>
        <div className="flash-action-group">
          {!flipped ? (
            <button className="primary" onClick={handleFlip}>
              <Eye size={16} /> Revelar
            </button>
          ) : (
            <>
              <button className="flash-btn-review" onClick={handleReview}>
                <RotateCw size={16} /> Repassar
              </button>
              <button className="flash-btn-learned" onClick={handleLearned}>
                <Check size={16} /> Apresa
              </button>
            </>
          )}
        </div>
        <button className="secondary" onClick={goNext} disabled={currentIdx === cards.length - 1}>
          Següent <ChevronRight size={16} />
        </button>
      </div>

      <div className="flash-dots">
        {cards.map((_, i) => (
          <span
            key={i}
            className={`flash-dot ${i === currentIdx ? 'active' : ''} ${learned.has(i) ? 'learned' : ''} ${review.has(i) ? 'review' : ''}`}
          />
        ))}
      </div>

      <div className="flash-legend">
        <span className="flash-legend-item"><span className="flash-dot learned" /> Apresa</span>
        <span className="flash-legend-item"><span className="flash-dot review" /> Per repassar</span>
        <span className="flash-legend-item"><span className="flash-dot" /> Pendent</span>
      </div>
    </div>
  );
}
