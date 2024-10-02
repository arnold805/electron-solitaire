import blackicon from 'assets/cardfronts/card_outline_black_plain.svg';
import CardBackground from 'src/renderer/CardBackground';
import './GameBoard.css';

export default function GameBoard() {
  const svgs = [
    blackicon,
    blackicon,
    null,
    blackicon,
    blackicon,
    blackicon,
    blackicon,
    blackicon,
    blackicon,
    blackicon,
    blackicon,
    blackicon,
    blackicon,
    blackicon,
  ];

  return (
    <div className="GameBoard">
      {svgs.map((svg, index) =>
        svg ? (
          <div key={index} className="card-container">
            {index < 1 || index > 6 ? <CardBackground /> : null}
            <img src={svg} alt={`svg-${index}`} className="svg-item" />
          </div>
        ) : (
          <div key={index} className="empty-space" />
        ),
      )}
    </div>
  );
}
