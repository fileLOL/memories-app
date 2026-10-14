# MEMORIES — Joc de memòries històric

Memories és un joc de memòries (matching pairs) amb temàtica històrica i contingut educatiu. Viatja a través de quatre èpoques, desbloqueja records i aprèn fets reals mentre poses a prova la teva memòria.

## Característiques

- **4 capítols històrics**: Roma Antiga, Al-Àndalus, Japó feudal i Mediterrani medieval
- **16 nivells** amb dificultat progressiva (de 6 a 12 parelles)
- **Mode solitari** (campanya) i **mode dos jugadors** (hot-seat)
- **Contingut educatiu**: cada carta desbloqueja un fet històric real
- **Col·lecció històrica**: tots els fets desbloquejats en un sol lloc
- **Sistema d'estrelles**: 1-3 estrelles segons temps i moviments
- **Persistència local**: progrés guardat a localStorage
- **Animació de flip 3D** a les cartes
- **Disseny responsive**: funciona en escriptori i mòbil
- **Textos en català**

## Executar

```bash
npm install
npm run dev
```

Obre l'adreça que apareix a la terminal (normalment `http://localhost:5173`).

## Compilació per producció

```bash
npm run build
npm run preview
```

## Arquitectura

```
src/
  main.jsx              → Entry point
  App.jsx               → Router principal amb gestió d'estat
  components/
    HomeScreen.jsx      → Menú principal i selecció de mode
    LevelSelect.jsx     → Selector de capítols i nivells
    GameScreen.jsx      → Pantalla de partida
    GameBoard.jsx       → Tauler de joc
    Card.jsx            → Carta individual amb flip 3D
    GameOver.jsx        → Resultats i contingut educatiu
  data/
    levels.js           → Definició de capítols, nivells i cartes
  hooks/
    useGameLogic.js     → Lògica del joc (matching, scoring, timer)
  styles/
    cards.css           → Animacions de cartes
    game.css            → Estils del joc
  style.css             → Estils principals
```

## Tecnologies

- React 18 + Vite
- TypeScript (disponible)
- Lucide React (icones)
- CSS pur (sense frameworks)

## Estat del projecte

MVP funcional amb 4 capítols complets. Pendent:
- Integració de sons
- Backend per sincronització en núvol
- Multijugador online (Firebase)
- Publicació a Google Play amb Capacitor
