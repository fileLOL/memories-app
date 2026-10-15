import React, { useState, useMemo } from 'react';
import { ChevronLeft, Check, X, Star, RotateCcw, Brain } from 'lucide-react';

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function generateQuestions(cards) {
  return cards.map((card, idx) => {
    const wrongAnswers = cards.filter((_, i) => i !== idx);
    const shuffledWrong = shuffleArray(wrongAnswers).slice(0, 3);
    const options = shuffleArray([
      { text: card.fact, correct: true },
      ...shuffledWrong.map(w => ({ text: w.fact, correct: false })),
    ]);
    return {
      question: `Què és "${card.label}"?`,
      icon: card.icon,
      options,
      correctIndex: options.findIndex(o => o.correct),
    };
  });
}

export default function QuizGame({ level, chapter, onBack, onFinish }) {
  const questions = useMemo(() => generateQuestions(level.cards), [level]);
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const q = questions[currentQ];
  const isAnswered = selected !== null;
  const isCorrect = selected !== null && q.options[selected].correct;

  const handleSelect = (idx) => {
    if (isAnswered) return;
    setSelected(idx);
    const correct = q.options[idx].correct;
    if (correct) setScore(s => s + 1);
    setAnswers(prev => [...prev, { question: q.question, correct, selectedIdx: idx, correctIdx: q.correctIndex }]);
  };

  const handleNext = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(c => c + 1);
      setSelected(null);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentQ(0);
    setSelected(null);
    setScore(0);
    setAnswers([]);
    setShowResult(false);
  };

  if (showResult) {
    const stars = score === questions.length ? 3 : score >= questions.length * 0.7 ? 2 : 1;
    return (
      <div className="content reveal-page minigame-result">
        <div className="reveal-stars">✦ · ✧ · ✦</div>
        <div className="eyebrow centered">QUIZ COMPLETAT</div>
        <h1>{score === questions.length ? <>Saber<br/><i>absolut</i></> : <>Coneixement<br/><i>adquirit</i></>}</h1>

        <div className="result-stats">
          <div className="result-stat">
            <Brain size={20} />
            <small>ENCERTS</small>
            <strong>{score}/{questions.length}</strong>
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
                  <b>{a.question}</b>
                  {!a.correct && (
                    <small>Resposta correcta: {questions[i].options[a.correctIdx].text}</small>
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

      <div className="quiz-header">
        <div className="quiz-progress">
          <div className="quiz-progress-bar" style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }} />
        </div>
        <div className="quiz-progress-text">
          <span>Pregunta {currentQ + 1} de {questions.length}</span>
          <span className="quiz-score">Encerts: {score}</span>
        </div>
      </div>

      <div className="quiz-question-area">
        <div className="quiz-question-icon">{chapter?.symbol}</div>
        <h2 className="quiz-question-text">{q.question}</h2>
      </div>

      <div className="quiz-options">
        {q.options.map((opt, idx) => {
          let cls = 'quiz-option';
          if (isAnswered) {
            if (idx === q.correctIndex) cls += ' correct';
            else if (idx === selected) cls += ' wrong';
          }
          return (
            <button
              key={idx}
              className={cls}
              onClick={() => handleSelect(idx)}
              disabled={isAnswered}
            >
              <span className="quiz-option-letter">{String.fromCharCode(65 + idx)}</span>
              <span className="quiz-option-text">{opt.text}</span>
              {isAnswered && idx === q.correctIndex && <Check size={16} className="quiz-option-icon" />}
              {isAnswered && idx === selected && !opt.correct && <X size={16} className="quiz-option-icon" />}
            </button>
          );
        })}
      </div>

      {isAnswered && (
        <div className={`quiz-feedback ${isCorrect ? 'correct' : 'wrong'}`}>
          {isCorrect ? 'Correcte! Has encertat.' : 'Incorrecte. La resposta correcta està marcada.'}
        </div>
      )}

      {isAnswered && (
        <div className="quiz-next">
          <button className="primary" onClick={handleNext}>
            {currentQ < questions.length - 1 ? 'Següent pregunta' : 'Veure resultats'}
          </button>
        </div>
      )}
    </div>
  );
}
