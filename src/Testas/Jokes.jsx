import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Joke from "./Joke";

const Jokes = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    fetch("https://v2.jokeapi.dev/joke/Programming?amount=10")
      .then((response) => response.json())
      .then((data) => {
        setJokes(data.jokes);
      })
      .catch((_) => setJokes("ERROR"));
  }, []);

  return (
    <div className="jokes-block">
      {jokes.map((joke) => (
        <Joke
          className="single-joke"
          key={joke.id}
          joke={joke.joke}
          setup={joke.setup}
          delivery={joke.delivery}
        />
      ))}
    </div>
  );
};

export default Jokes;
