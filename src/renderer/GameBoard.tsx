import blackicon from 'assets/cardfronts/card_outline_black_plain.svg';
import clearoutline from 'assets/cardborders/card_outline_clear.svg';
import CardBackground from 'src/renderer/CardBackground';
import './GameBoard.css';

export default function GameBoard() {
  const svgs = [
    blackicon,
    blackicon,
    clearoutline,
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

  const firstRowItems = svgs.slice(0, 7);
  const secondRowItems = svgs.slice(-7);

  return (
    <div className="GameBoard">
      {/* First row (non-tableau items) */}
      <div className="first-row">
        {firstRowItems.map((svg, index) =>
          svg ? (
            <div key={index} className="card-container">
              {index < 1 || index > 7 ? <CardBackground /> : null}
              <img src={svg} alt={`svg-${index}`} className="card-border" />
            </div>
          ) : (
            <div key={index} className="empty-space" />
          ),
        )}
      </div>

      {/* Tableau items (last 7 items) */}
      <div className="second-row">
        {secondRowItems.map((svg, index) => (
          <div key={index} className="tableau-column">
            {Array(index + 1).fill(null).map((_, cardIndex) => (
                <div
                  key={cardIndex}
                  className={`tableau-cards card-${cardIndex}`}
                >
                  <CardBackground />
                  <img
                    src={svg}
                    alt={`svg-tableau-${index}`}
                    className="card-border"
                  />
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}
