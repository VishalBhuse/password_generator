import React, { useState } from "react";
import GeneratePassword from "./GeneratePassword";
const App = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(6);
  const [uppercase, SetUppercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const handleRange = (e) => {
    setLength(Number(e.target.value));
  };

  const handleGeneratePass = () => {
    const generatedPassword = GeneratePassword(
      length,
      uppercase,
      numbers,
      symbols
    );
    setPassword(generatedPassword);
    navigator.clipboard.writeText(generatedPassword);
  };

  const handleFilter = (e) => {
    const { name, checked } = e.target;

    if (name === "uppercase") {
      SetUppercase(checked);
    } else if (name === "numbers") {
      setNumbers(checked);
    } else if (name === "symbols") {
      setSymbols(checked);
    }
  };

  return (
    <div className="main_container">
      <div className="parent_div">
        <h3>Password Generator</h3>
        <div className="pass_copy">
          <p>{password}</p>
          <i
            className="fas fa-copy cpysvg"
            onClick={() => navigator.clipboard.writeText(password)}
          ></i>
        </div>
        <div className="secodnchild">
          <div className="char_len">
            <p>charater length</p>
            <p>{length}</p>
          </div>
          <div className="range">
            <input
              type="range"
              min="6"
              max="15"
              className="rangeinput"
              value={length}
              onChange={handleRange}
            />
          </div>
          <div className="filter">
            <div>
              <input
                type="checkbox"
                name="uppercase"
                checked={uppercase}
                onChange={handleFilter}
              />
              <span>include uppercase letter</span>
            </div>
            <div>
              <input
                type="checkbox"
                name="numbers"
                checked={numbers}
                onChange={handleFilter}
              />
              <span>include number</span>
            </div>
            <div>
              <input
                type="checkbox"
                name="symbols"
                checked={symbols}
                onChange={handleFilter}
              />
              <span>include symbols</span>
            </div>
          </div>
          <button className="generate" onClick={handleGeneratePass}>
            Generate
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
