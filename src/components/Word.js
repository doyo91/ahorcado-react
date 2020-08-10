import React from "react";

export const Word = ({ selectedWord, correctLetters }) => {
  return (
    <div className="word" id="word">
      {selectedWord.split("").map((letter, i) => (
        <span key={i} className="letter">
          {correctLetters.includes(letter) ? letter : ""}
        </span>
      ))}
    </div>
  );
};
