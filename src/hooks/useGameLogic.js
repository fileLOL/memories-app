import { useState, useEffect, useCallback, useRef } from 'react';

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function useGameLogic(level, mode = 'solo') {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [isChecking, setIsChecking] = useState(false);
  const [lastMatchedCard, setLastMatchedCard] = useState(null);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [scores, setScores] = useState({ 1: 0, 2: 0 });
  const [justMatched, setJustMatched] = useState(null);
  const timerRef = useRef(null);

  useEffect(() => {
    if (!level) return;
    const cardPairs = level.cards.map((c, i) => [
      { id: i * 2, pairId: i, ...c },
      { id: i * 2 + 1, pairId: i, ...c },
    ]).flat();
    setCards(shuffleArray(cardPairs));
    setFlipped([]);
    setMatched([]);
    setMoves(0);
    setMistakes(0);
    setTimeElapsed(0);
    setIsRunning(false);
    setIsComplete(false);
    setIsChecking(false);
    setLastMatchedCard(null);
    setCurrentPlayer(1);
    setScores({ 1: 0, 2: 0 });
    setJustMatched(null);
  }, [level]);

  useEffect(() => {
    if (isRunning && !isComplete) {
      timerRef.current = setInterval(() => {
        setTimeElapsed(t => {
          if (level && level.timeLimit && t + 1 >= level.timeLimit) {
            setIsComplete(true);
            setIsRunning(false);
            return level.timeLimit;
          }
          return t + 1;
        });
      }, 1000);
    }
    return () => clearInterval(timerRef.current);
  }, [isRunning, isComplete, level]);

  useEffect(() => {
    if (level && matched.length === level.pairs * 2) {
      setIsComplete(true);
      setIsRunning(false);
    }
  }, [matched, level]);

  const flipCard = useCallback((cardId) => {
    if (isChecking) return;
    if (flipped.includes(cardId)) return;
    if (matched.includes(cardId)) return;
    if (flipped.length >= 2) return;

    if (!isRunning) setIsRunning(true);

    const newFlipped = [...flipped, cardId];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setMoves(m => m + 1);
      setIsChecking(true);

      const [first, second] = newFlipped;
      const card1 = cards.find(c => c.id === first);
      const card2 = cards.find(c => c.id === second);

      if (card1.pairId === card2.pairId) {
        setTimeout(() => {
          setMatched(prev => {
            const newMatched = [...prev, first, second];
            return newMatched;
          });
          setLastMatchedCard(card1);
          setJustMatched(card1);
          setTimeout(() => setJustMatched(null), 2500);

          if (mode === 'duo') {
            setScores(prev => ({
              ...prev,
              [currentPlayer]: prev[currentPlayer] + 1
            }));
          }

          setFlipped([]);
          setIsChecking(false);
        }, 500);
      } else {
        setMistakes(m => m + 1);
        setTimeout(() => {
          setFlipped([]);
          setIsChecking(false);
          if (mode === 'duo') {
            setCurrentPlayer(p => p === 1 ? 2 : 1);
          }
        }, 1000);
      }
    }
  }, [flipped, matched, isChecking, isRunning, cards, mode, currentPlayer]);

  return {
    cards,
    flipped,
    matched,
    moves,
    mistakes,
    timeElapsed,
    isRunning,
    isComplete,
    isChecking,
    lastMatchedCard,
    justMatched,
    currentPlayer,
    scores,
    flipCard,
  };
}
