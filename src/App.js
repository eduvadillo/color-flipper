import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [colorHex, setColorHex] = useState(false);
  const [showCopy, setShowCopy] = useState(``);

  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

  useEffect(() => {
    setColorHex(randomColor);
  }, []);

  const randomHex = () => {
    setColorHex(randomColor);
  };

  const copyColor = () => {
    navigator.clipboard.writeText(colorHex);
    setShowCopy(`copied to clipboard`);
    setTimeout(() => {
      setShowCopy(``);
    }, 2000);
  };

  if (colorHex === false) {
    return <></>;
  } else {
    return (
      <div className='App' style={{ backgroundColor: `${colorHex}` }}>
        <h1 onClick={copyColor}>{colorHex}</h1>
        <h6>{showCopy}</h6>
        <h4>Press the button bellow to generate new colors</h4>
        <button onClick={randomHex}>Generate new color</button>
      </div>
    );
  }
}

export default App;
