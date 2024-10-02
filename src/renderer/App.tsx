import {
  MemoryRouter as Router,
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';
import icon from 'assets/cardfronts/card_outline_home.svg';
import './App.css';
import GameBoard from './GameBoard';

function Home() {
  const navigate = useNavigate(); // Hook for programmatic navigation

  const handleNewGameClick = () => {
    navigate('/game'); // Navigate to the /game route
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
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<GameBoard />} />
      </Routes>
    </Router>
  );
}
