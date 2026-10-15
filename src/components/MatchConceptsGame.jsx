import React, { useState, useMemo } from 'react';
import { ChevronLeft, Check, X, Star, RotateCcw, Link } from 'lucide-react';

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function MatchConceptsGame({ level, chapter, onBack, onFinish }) {
  const labels = useMemo(() => shuffleArray(level.cards.map((c, i) => ({ ...c, idx: i }))), [level]);
  const facts = useMemo(() => shuffleArray(level.cards.map((c, i) => ({ ...c, idx: i }))), [level]);

  const [selectedLabel, setSelectedLabel] = useState(null);
  const [selectedFact, setSelectedFact] = useState(null);
  const [matches, setMatches] = useState({});
  const [wrongPair, setWrongPair] = useState(null);
  const [checked, setChecked] = useState(false);

  const matchedCount = Object.keys(matches).length;
  const allMatched = matchedCount === level.cards.length;

  const handleLabelClick = (labelIdx) => {
    if (matches[labelIdx] !== undefined) return;
    setSelectedLabel(labelIdx);
    if (selectedFact !== null) {
      attemptMatch(labelIdx, selectedFact);
    }
  };

  const handleFactClick = (factIdx) => {
    if (Object.values(matches).includes(factIdx)) return;
    setSelectedFact(factIdx);
    if (selectedLabel !== null) {
      attemptMatch(selectedLabel, factIdx);
    }
  };

  const attemptMatch = (labelIdx, factIdx) => {
    if (labelIdx === factIdx) {
      setMatches(prev => ({ ...prev, [labelIdx]: factIdx }));
      setSelectedLabel(null);
      setSelectedFact(null);
      setWrongPair(null);
    } else {
      setWrongPair({ labelIdx, factIdx });
      setTimeout(() => {
        setWrongPair(null);
        setSelectedLabel(null);
        setSelectedFact(null);
      }, 800);
    }
  };

  const isLabelMatched = (idx) => matches[idx] !== undefined;
  const isFactMatched = (idx) => Object.values(matches).includes(idx);
  const isLabelSelected = (idx) => selectedLabel === idx;
  const isFactSelected = (idx) => selectedFact === idx;
  const isLabelWrong = (idx) => wrongPair && wrongPair.labelIdx === idx;
  const isFactWrong = (idx) => wrongPair && wrongPair.factIdx === idx;

  const handleRestart = () => {
    setSelectedLabel(null);
    setSelectedFact(null);
    setMatches({});
    setWrongPair(null);
    setChecked(false);
  };

  return (
    <div className="content minigame-play">
      <button className="back-link" onClick={onBack}>
        <ChevronLeft size={16} /> Tornar als modes
      </button>

      <div className="match-header">
        <div className="eyebrow">RELACIONAR</div>
        <h2 className="match-title">Connecta cada concepte amb la seva definició</h2>
        <div className="match-progress">
          <span>{matchedCount} de {level.cards.length} connectats</span>
          <div className="match-progress-bar">
            <div style={{ width: `${(matchedCount / level.cards.length) * 100}%` }} />
          </div>
        </div>
      </div>

      {allMatched && (
        <div className="match-complete">
          <Check size={20} />
          <span>Tots els conceptes connectats correctament!</span>
        </div>
      )}

      <div className="match-board">
        <div className="match-column">
          <div className="match-column-title">CONCEPTES</div>
          {labels.map((card, i) => {
            const labelIdx = card.idx;
            let cls = 'match-item match-label';
            if (isLabelMatched(labelIdx)) cls += ' matched';
            else if (isLabelSelected(labelIdx)) cls += ' selected';
            else if (isLabelWrong(labelIdx)) cls += ' wrong';
            return (
              <button
                key={`l-${i}`}
                className={cls}
                onClick={() => handleLabelClick(labelIdx)}
                disabled={isLabelMatched(labelIdx)}
              >
                <span className="match-item-label">{card.label}</span>
                {isLabelMatched(labelIdx) && <Check size={14} />}
              </button>
            );
          })}
        </div>

        <div className="match-column">
          <div className="match-column-title">DEFINICIONS</div>
          {facts.map((card, i) => {
            const factIdx = card.idx;
            let cls = 'match-item match-fact';
            if (isFactMatched(factIdx)) cls += ' matched';
            else if (isFactSelected(factIdx)) cls += ' selected';
            else if (isFactWrong(factIdx)) cls += ' wrong';
            return (
              <button
                key={`f-${i}`}
                className={cls}
                onClick={() => handleFactClick(factIdx)}
                disabled={isFactMatched(factIdx)}
              >
                <span className="match-item-text">{card.fact}</span>
                {isFactMatched(factIdx) && <Check size={14} />}
              </button>
            );
          })}
        </div>
      </div>

      {allMatched && (
        <div className="match-actions">
          <button className="primary" onClick={handleRestart}>
            <RotateCcw size={16} /> Tornar a jugar
          </button>
          <button className="secondary" onClick={onBack}>
            Tornar als modes
          </button>
        </div>
      )}
    </div>
  );
}
