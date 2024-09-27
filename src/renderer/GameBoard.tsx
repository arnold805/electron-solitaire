import blackicon from 'assets/card_outline_black_plain.svg';
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
          <img
            key={index}
            src={svg}
            alt={`svg-${index}`}
            className="svg-item"
          />
        ) : (
          <div key={index} className="empty-space" />
        ),
      )}
    </div>
  );
}
