import React, { useState, useMemo } from 'react';
import { ChevronLeft, Check, X, Star, RotateCcw, PenTool } from 'lucide-react';

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function generateStory(cards) {
  const sentences = cards.map((card, idx) => {
    const words = card.label.split(' ');
    const mainWord = words[words.length - 1];
    const sentence = `El concepte de "${card.label}" fa referència al fet que ${card.fact.toLowerCase()}`;
    const blankedSentence = sentence.replace(card.label, '______');
    return {
      sentence,
      blankedSentence,
      answer: card.label,
      hint: card.fact.substring(0, 50) + '...',
      icon: card.icon,
    };
  });
  return sentences;
}

export default function StoryBuilderGame({ level, chapter, onBack, onFinish }) {
  const stories = useMemo(() => generateStory(level.cards), [level]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [feedback, setFeedback] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const story = stories[currentIdx];

  const wordBank = useMemo(() => {
    const allLabels = level.cards.map(c => c.label);
    const shuffled = shuffleArray(allLabels);
    return shuffled;
  }, [level]);

  const handleSubmit = () => {
    if (!userInput.trim()) return;
    const correct = userInput.trim().toLowerCase() === story.answer.toLowerCase();
    if (correct) setScore(s => s + 1);
    setFeedback({ correct, answer: story.answer });
    setAnswers(prev => [...prev, { story: story.blankedSentence, correct, userAnswer: userInput, correctAnswer: story.answer }]);
  };

  const handleNext = () => {
    if (currentIdx < stories.length - 1) {
      setCurrentIdx(i => i + 1);
      setUserInput('');
      setFeedback(null);
    } else {
      setShowResult(true);
    }
  };

  const handleWordClick = (word) => {
    setUserInput(word);
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setUserInput('');
    setScore(0);
    setAnswers([]);
    setFeedback(null);
    setShowResult(false);
  };

  if (showResult) {
    const stars = score === stories.length ? 3 : score >= stories.length * 0.7 ? 2 : 1;
    return (
      <div className="content reveal-page minigame-result">
        <div className="reveal-stars">✦ · ✧ · ✦</div>
        <div className="eyebrow centered">HISTÒRIA COMPLETADA</div>
        <h1>{score === stories.length ? <>Mestre<br/><i>narrador</i></> : <>Història<br/><i>construïda</i></>}</h1>

        <div className="result-stats">
          <div className="result-stat">
            <PenTool size={20} />
            <small>ENCERTS</small>
            <strong>{score}/{stories.length}</strong>
          </div>
        </div>

        <div className="result-stars">
          {[1, 2, 3].map(s => (
            <Star key={s} size={36} fill={s <= stars ? 'var(--gold)' : 'transparent'} color={s <= stars ? 'var(--gold)' : '#555'} />
          ))}
        </div>

        <div className="quiz-review">
          <div className="eyebrow centered">RESSENYES</div>
          <div className="quiz-review-list">
            {answers.map((a, i) => (
              <div key={i} className={`quiz-review-item ${a.correct ? 'correct' : 'wrong'}`}>
                <div className="quiz-review-status">
                  {a.correct ? <Check size={16} /> : <X size={16} />}
                </div>
                <div className="quiz-review-text">
                  <b>{a.story.replace('______', a.correct)}</b>
                  {!a.correct && (
                    <small>La teva resposta: "{a.userAnswer}" → Correcta: "{a.correctAnswer}"</small>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal-actions" style={{ justifyContent: 'center' }}>
          <button className="primary" onClick={handleRestart}>
            <RotateCcw size={16} /> Tornar a jugar
          </button>
          <button className="secondary" onClick={onBack}>
            Tornar als modes
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="content minigame-play">
      <button className="back-link" onClick={onBack}>
        <ChevronLeft size={16} /> Tornar als modes
      </button>

      <div className="story-header">
        <div className="story-progress">
          <div className="story-progress-bar" style={{ width: `${((currentIdx + 1) / stories.length) * 100}%` }} />
        </div>
        <div className="story-progress-text">
          <span>Frase {currentIdx + 1} de {stories.length}</span>
          <span className="story-score">Encerts: {score}</span>
        </div>
      </div>

      <div className="story-question-area">
        <div className="story-chapter-tag">{chapter?.symbol} {chapter?.name}</div>
        <div className="story-sentence">
          {story.blankedSentence.split('______').map((part, i, arr) => (
            <React.Fragment key={i}>
              <span>{part}</span>
              {i < arr.length - 1 && (
                <span className={`story-blank ${feedback ? (feedback.correct ? 'correct' : 'wrong') : ''}`}>
                  {feedback ? feedback.answer : (userInput || '?')}
                </span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="story-word-bank">
        <div className="eyebrow" style={{ marginBottom: 12 }}>BANCA DE PARAULES</div>
        <div className="story-words">
          {wordBank.map((word, i) => (
            <button
              key={i}
              className={`story-word ${userInput === word ? 'selected' : ''}`}
              onClick={() => handleWordClick(word)}
              disabled={feedback !== null}
            >
              {word}
            </button>
          ))}
        </div>
      </div>

      {feedback && (
        <div className={`quiz-feedback ${feedback.correct ? 'correct' : 'wrong'}`}>
          {feedback.correct ? 'Correcte! Has completat la frase.' : `Incorrecte. La resposta correcta és "${feedback.answer}".`}
        </div>
      )}

      <div className="story-actions">
        {!feedback ? (
          <button className="primary" onClick={handleSubmit} disabled={!userInput.trim()}>
            <Check size={16} /> Comprovar
          </button>
        ) : (
          <button className="primary" onClick={handleNext}>
            {currentIdx < stories.length - 1 ? 'Següent frase' : 'Veure resultats'}
          </button>
        )}
      </div>
    </div>
  );
}
