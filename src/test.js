import { useState } from "react";
import { FloatingLettersTextBuilder} from 'react-animated-text-builders'


const quotes = [
  {
    quote:
      "Be careful who you trust.Salt and sugar look the same.",

  },
  {
    quote:
      "A friend asks only for your time not your money."
  },
  {
    quote: "Hard work pays off in the future, laziness pays off now.",

  },
  {
    quote: "Fortune favors the brave.",

  },
  {
    quote:
      "You will travel to many exotic places in your lifetime.",

  },
  {
    quote:
      "Jealousy doesn't open doors, it closes them!",

  },
  {
    quote:
      "A journey of 100 miles begins with 1 step",

  },
  {
    quote:
      "You have a secret admirer.",

  },
  {
    quote:
      "Beware a wolf in sheep's clothing ",
  }
];


export default function App() {
  const [index, setIndex] = useState();
  const generate = () => {
    const index = Math.floor(Math.random() * quotes.length);
    setIndex(index);
  };
  return (
    <div className = "App"
      style={{
        backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfEnh1A3YhN-YpZuyxloc_TFG9NPDiqfp2IQ&usqp=CAU")` 
      }}
    >
      <h1 style={{display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "Yellow",


          }}>Virtual Fortune Cookie</h1>
      <h1>
      <p 
          style={{display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "red"
          }}>    
      {quotes[index] && quotes[index].quote}</p>
      </h1>
    <h3 className="App"
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
    >
      <button onClick={generate}>Read my fortune</button>
    </h3>
    </div>
  );
}

