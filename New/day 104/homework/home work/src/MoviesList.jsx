import React from 'react';

function MoviesList() {
  const arrMovieNames = [
    "ნათლია",
    "შეშლილი მაქსი: მრისხანების გზა",
    "გაქცეული",
    "შვიდი სამურაი",
    "დროის მანქანა",
    "ინტერსტელარი",
    "მატრიცა",
    "შინდლერის სია"
  ];

  return (
    <div className="movies-list">
      <h2>ფილმების სია</h2>
      <ul>
        {arrMovieNames.map((movie, index) => (
          <li key={index}>{movie}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MoviesList;
