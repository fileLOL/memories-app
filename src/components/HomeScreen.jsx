import React from 'react';
import { ArrowRight, Users, User, BookOpen, Sparkles, Shield, Compass } from 'lucide-react';
import { chapters } from '../data/levels';

export default function HomeScreen({ onNavigate, onStartGame }) {
  return (
    <div className="content home">
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-content">
          <div className="eyebrow"><span /> JOC DE MEMÒRIES HISTÒRIC</div>
          <h1>Viatja a través<br/>del temps i<br/><i>descobreix qui ets</i></h1>
          <p>Explora quatre èpoques històriques, desbloqueja records i aprèn fets reals mentre poses a prova la teva memòria. En solitari o acompanyat.</p>
          <div className="hero-buttons">
            <button className="primary" onClick={() => onNavigate('level-select')}>
              Comença l'aventura <ArrowRight size={17} />
            </button>
            <button className="secondary" onClick={() => onNavigate('collection')}>
              <BookOpen size={16} /> Col·lecció històrica
            </button>
          </div>
          <div className="hero-note">
            <Shield size={14} /> Ficció històrica educativa. Aprèn jugant.
          </div>
        </div>
        <div className="hero-seal">
          <div className="seal-ring">
            <span>✦</span><b>M</b><small>NOSCE TE IPSUM</small>
          </div>
        </div>
      </section>

      <div className="section-head">
        <div>
          <div className="eyebrow muted">TRIA EL TEU MODE</div>
          <h2>Com vols jugar?</h2>
        </div>
      </div>

      <div className="mode-grid">
        <button className="mode-card" onClick={() => onStartGame('solo')}>
          <div className="mode-icon"><User size={32} /></div>
          <div className="mode-info">
            <h3>Campanya en solitari</h3>
            <p>Completa tots els capítols, desbloqueja records i descobreix fets històrics al teu ritme.</p>
          </div>
          <ArrowRight size={20} className="mode-arrow" />
        </button>

        <button className="mode-card" onClick={() => onStartGame('duo')}>
          <div className="mode-icon"><Users size={32} /></div>
          <div className="mode-info">
            <h2>Dos jugadors</h2>
            <p>Repte cara a cara al mateix dispositiu. Torns alterns: qui trobi més parelles, guanya.</p>
          </div>
          <ArrowRight size={20} className="mode-arrow" />
        </button>
      </div>

      <div className="section-head">
        <div>
          <div className="eyebrow muted">ELS TEUS CAPÍTOLS</div>
          <h2>Èpoques per explorar</h2>
        </div>
      </div>

      <div className="chapter-grid">
        {chapters.map((ch, i) => (
          <button key={ch.id} className="chapter-card" onClick={() => onStartGame('solo', ch.id)}>
            <div className="chapter-art" style={{ '--life-color': ch.color }}>
              <span className="chapter-symbol">{ch.symbol}</span>
              <span className="chapter-number">CAPÍTOL {String(i + 1).padStart(2, '0')}</span>
            </div>
            <div className="chapter-info">
              <div className="chapter-meta">{ch.era}</div>
              <h3>{ch.name}</h3>
              <p>{ch.place}</p>
            </div>
          </button>
        ))}
      </div>

      <section className="quote">
        <Compass />
        <div>
          <p>"Cada carta que gires és una porta al passat. Cada parella que trobes, un fragment de saviesa."</p>
          <small>— NOTA DE L'ARXIVER</small>
        </div>
        <button onClick={() => onNavigate('level-select')}>
          Triar capítol <ArrowRight size={16} />
        </button>
      </section>
    </div>
  );
}
