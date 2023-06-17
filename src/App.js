import React from "react";
import "./styles.css";
import { useState } from "react";

const animeDB = {
  Top3_Movies: [
    { name: "Your name", imdb: "8.4" },
    { name: "I want to eat your pancreas", imdb: "8" },
    { name: "A silent voice", imdb: "8.2" },
  ],

  Top3_Underratedmovies: [
    { name: "Perfect blue", imdb: "8" },
    { name: "A wisker away", imdb: "6.7" },
    { name: "Jose, the Tiger and Fish", imdb: "7.6" },
  ],

  Top3_Series: [
    { name: "Your lie in April", imdb: "8.6" },
    { name: "Death Note", imdb: "8.5" },
    { name: "Jujutsu Kaisen", imdb: "8.5" },
  ],
};

const topButtons = Object.keys(animeDB);

export default function App() {
  const [animeList, setanimeList] = useState("Top3_Series");

  function clickHandler(clickbtns) {
    setanimeList(clickbtns);
  }

  return (
    <div className="App">
      <h1>🍿animemovies</h1>
      <p style={{ textAlign: "left", color: "white", fontSize: "large" }}>
        Can't watch long animes? Here's a list of anime movies which are shorter
        than the anime series.
      </p>

      <div>
        {topButtons.map((clickbtns) => (
          <button onClick={() => clickHandler(clickbtns)} className="top-btn">
            {clickbtns}
          </button>
        ))}
      </div>
      <hr />

      {animeDB[animeList].map((anime) => (
        <ul style={{ listStyle: "none", textAlign: "left", padding: "0" }}>
          <li className="anime-list">
            <a className="link" href="https://sanji.to/">
              <div style={{ fontSize: "x-large", color: "white" }}>
                {anime.name}
              </div>
              <div style={{ fontSize: "smaller", color: "white" }}>
                IMDB rating: {anime.imdb}/10
              </div>
            </a>
          </li>
        </ul>
      ))}

      <ul>
        <li className="list">
          <a className="link" href="https://github.com/Vipul-Bhardwaj777">
            Github
          </a>
        </li>
        <li className="list">
          <a className="link" href="https://twitter.com/Vipul__777">
            Twitter
          </a>
        </li>
        <li className="list">
          <a
            className="link"
            href="https://www.linkedin.com/in/vipul-bhardwaj-444888207/"
          >
            Linkdin
          </a>
        </li>
      </ul>
    </div>
  );
}
