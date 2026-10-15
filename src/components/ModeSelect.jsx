import React from 'react';
import { ChevronLeft, Brain, Clock, Link, Layers, PenTool, Grid3x3 } from 'lucide-react';

const modes = [
  {
    id: 'memory',
    icon: Grid3x3,
    title: 'Memòries Clàssic',
    desc: 'El joc de memoria original. Troba totes les parelles abans que s\'acabi el temps.',
    color: 'var(--gold)',
  },
  {
    id: 'quiz',
    icon: Brain,
    title: 'Quiz de Saber',
    desc: 'Preguntes sobre els fets històrics del nivell. Tria la resposta correcta entre quatre opcions.',
    color: '#c74040',
  },
  {
    id: 'timeline',
    icon: Clock,
    title: 'Línia del Temps',
    desc: 'Ordena els conceptes històrics en la seqüència correcta amb les fletxes.',
    color: '#4a8cc7',
  },
  {
    id: 'match',
    icon: Link,
    title: 'Relacionar',
    desc: 'Connecta cada concepte amb la seva definició. Troba totes les parelles correctes.',
    color: '#6e8d7b',
  },
  {
    id: 'flashcards',
    icon: Layers,
    title: 'Fitxes de Memòria',
    desc: 'Repassa les fitxes històriques. Gira-les per descobrir fets i marca les que ja saps.',
    color: '#c7a56b',
  },
  {
    id: 'story',
    icon: PenTool,
    title: 'Constructor d\'Històries',
    desc: 'Completa les frases amb les paraules clau dels fets històrics. Omple els espais en blanc.',
    color: '#9e4e8f',
  },
];

export default function ModeSelect({ onBack, onSelectMode, chapter, level }) {
  return (
    <div className="content">
      <button className="back-link" onClick={onBack}>
        <ChevronLeft size={16} /> Tornar
      </button>

      <div className="page-title">
        <div className="eyebrow">MODES DE JOC</div>
        <h1>{chapter?.name}</h1>
        <p>Nivell {level?.id}: {level?.name}. Tria com vols posar a prova els teus coneixements.</p>
      </div>

      <div className="minigame-grid">
        {modes.map(m => {
          const Icon = m.icon;
          return (
            <button
              key={m.id}
              className="minigame-card"
              onClick={() => onSelectMode(m.id)}
              style={{ '--mg-color': m.color }}
            >
              <div className="minigame-icon">
                <Icon size={28} />
              </div>
              <div className="minigame-info">
                <h3>{m.title}</h3>
                <p>{m.desc}</p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
