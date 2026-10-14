import React, { useState } from 'react';
import HomeScreen from './components/HomeScreen';
import LevelSelect from './components/LevelSelect';
import GameScreen from './components/GameScreen';
import { chapters, getStarRating } from './data/levels';
import './style.css';
import './styles/cards.css';
import './styles/game.css';

function App() {
  const [page, setPage] = useState('home');
  const [mode, setMode] = useState('solo');
  const [currentChapter, setCurrentChapter] = useState(null);
  const [currentLevel, setCurrentLevel] = useState(null);
  const [progress, setProgress] = useState(() => {
    try {
      const saved = localStorage.getItem('memories-progress');
      return saved ? JSON.parse(saved) : {};
    } catch { return {}; }
  });
  const [gameKey, setGameKey] = useState(0);

  const saveProgress = (chapterId, levelId, stars) => {
    setProgress(prev => {
      const key = `${chapterId}-${levelId}`;
      const existing = prev[key] || { stars: 0, completed: false };
      const updated = {
        ...prev,
        [key]: {
          stars: Math.max(existing.stars, stars),
          completed: true
        }
      };
      localStorage.setItem('memories-progress', JSON.stringify(updated));
      return updated;
    });
  };

  const handleStartGame = (selectedMode, chapterId) => {
    setMode(selectedMode);
    if (chapterId) {
      const ch = chapters.find(c => c.id === chapterId);
      if (ch) {
        setCurrentChapter(ch);
        setCurrentLevel(ch.levels[0]);
        setPage('game');
        return;
      }
    }
    setPage('level-select');
  };

  const handleSelectLevel = (chapter, level) => {
    setCurrentChapter(chapter);
    setCurrentLevel(level);
    setPage('game');
  };

  const handleNextLevel = () => {
    if (!currentChapter || !currentLevel) return;
    const idx = currentChapter.levels.findIndex(l => l.id === currentLevel.id);
    if (idx < currentChapter.levels.length - 1) {
      const nextLevel = currentChapter.levels[idx + 1];
      saveProgress(currentChapter.id, currentLevel.id, getStarRating(0, currentLevel.pairs, 0, currentLevel.timeLimit));
      setCurrentLevel(nextLevel);
    } else {
      const chIdx = chapters.findIndex(c => c.id === currentChapter.id);
      if (chIdx < chapters.length - 1) {
        const nextCh = chapters[chIdx + 1];
        setCurrentChapter(nextCh);
        setCurrentLevel(nextCh.levels[0]);
      } else {
        setPage('level-select');
      }
    }
  };

  const handleNavigate = (p) => setPage(p);

  return (
    <div className="app">
      <main className="main" style={{ marginLeft: 0 }}>
        <header className="topbar">
          <div className="crumb">
            MEMORIES <span>/</span>{' '}
            {({
              'home': 'INICI',
              'level-select': 'TRIA NIVELL',
              'game': currentChapter ? `${currentChapter.name.toUpperCase()} · ${currentLevel?.name || ''}` : 'PARTIDA',
              'collection': 'COL·LECCIÓ HISTÒRICA'
            })[page] || 'ARXIU'}
          </div>
          <div className="top-actions">
            <span className="status-dot" /> <span>ARXIU PERSONAL</span>
          </div>
        </header>

        {page === 'home' && (
          <HomeScreen onNavigate={handleNavigate} onStartGame={handleStartGame} />
        )}

        {page === 'level-select' && (
          <LevelSelect
            onBack={() => setPage('home')}
            onSelectLevel={handleSelectLevel}
            progress={progress}
            mode={mode}
          />
        )}

        {page === 'game' && currentLevel && currentChapter && (
          <GameScreen
            key={gameKey}
            level={currentLevel}
            chapter={currentChapter}
            mode={mode}
            onBack={() => {
              if (currentLevel) {
                saveProgress(currentChapter.id, currentLevel.id, 0);
              }
              setPage('level-select');
            }}
            onSaveProgress={saveProgress}
            onNextLevel={handleNextLevel}
            onReplay={() => {
              saveProgress(currentChapter.id, currentLevel.id, 0);
              setGameKey(k => k + 1);
            }}
          />
        )}

        {page === 'collection' && (
          <div className="content">
            <button className="back-link" onClick={() => setPage('home')}>
              ← Tornar
            </button>
            <div className="page-title">
              <div className="eyebrow">SABER DESBLOQUEJAT</div>
              <h1>Col·lecció històrica</h1>
              <p>Tots els fets històrics que has anat descobrint a mesura que jugaves.</p>
            </div>
            <div className="collection-grid">
              {chapters.map(ch => (
                <div key={ch.id} className="collection-chapter">
                  <h2 style={{ color: ch.color }}>{ch.symbol} {ch.name}</h2>
                  <small>{ch.era}</small>
                  {ch.levels.map(lv => (
                    <div key={lv.id} className="collection-level">
                      <h3>Nivell {lv.id}: {lv.name}</h3>
                      <ul>
                        {lv.cards.map((card, i) => (
                          <li key={i}>
                            <b>{card.label}</b>: {card.fact}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}

        <footer className="footer">
          <span>MEMORIES © 2026</span>
          <span>UNA OBRA DE FICCIÓ INTERACTIVA</span>
          <span>APRÈN JUGANT</span>
        </footer>
      </main>
    </div>
  );
}

export default App;
