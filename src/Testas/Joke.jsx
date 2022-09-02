import React from "react";

const Joke = ({ joke, setup, delivery }) => {
  return (
    <div>
      <div className="single-joke">
        {joke ? (
          <div className="joke">{joke}</div>
        ) : (
          <div className="setup-delivery">
            <div>{setup}</div>
            <div>{delivery}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Joke;
