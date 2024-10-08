import {
  MemoryRouter as Router,
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';
import icon from 'assets/cardfronts/card_outline_home.svg';
import './App.css';
import GameBoard from './GameBoard';
import Deck from './Deck';
import Deckuuid from './Deckuuid';

function Home() {
  const navigate = useNavigate(); // Hook for programmatic navigation

  const handleNewGameClick = () => {
    navigate('/game'); // Navigate to the /game route
  };
  const handleDeckClick = () => {
    navigate('/deck'); // Navigate to the /game route
  };
  const handleDeckuuidClick = () => {
    navigate('/deckuuid'); // Navigate to the /game route
  };
  return (
    <div>
      <h1>Welcome to Solitaire!</h1>
      <div className="Home">
        <img width="200" alt="icon" src={icon} />
      </div>
      <div className="newgame-container">
        <button
          type="button"
          className="newgamebtn"
          onClick={handleNewGameClick}
        >
          New Game
        </button>
      </div>
      <div className="deck-container">
        <button type="button" className="deckuuidbtn" onClick={handleDeckClick}>
          Deck
        </button>
        <button type="button" className="deckbtn" onClick={handleDeckuuidClick}>
          Deck UUIDV4
        </button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<GameBoard />} />
        <Route path="/deck" element={<Deck />} />
        <Route path="/deckuuid" element={<Deckuuid />} />
      </Routes>
    </Router>
  );
}
