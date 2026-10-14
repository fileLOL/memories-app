import React from 'react';
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

export default function Card({ card, isFlipped, isMatched, isMatchAnim, onClick, size = 'md' }) {
  const Icon = getIcon(card.icon);
  const iconSize = size === 'sm' ? 20 : size === 'lg' ? 32 : 26;

  return (
    <div
      className={`card-container ${isFlipped ? 'flipped' : ''} ${isMatched ? 'matched' : ''} ${isMatchAnim ? 'match-anim' : ''}`}
      onClick={onClick}
    >
      <div className="card-inner">
        <div className="card-face card-back">
          <div className="card-back-pattern">
            <span className="card-back-sigil">M</span>
          </div>
        </div>
        <div className="card-face card-front">
          <Icon size={iconSize} className="card-icon" strokeWidth={1.5} />
          <span className="card-label">{card.label}</span>
        </div>
      </div>
    </div>
  );
}
