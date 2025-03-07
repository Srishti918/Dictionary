import React, { useState } from "react";
function App() {
  const dictionary = [

    { word: "React", meaning: "A JavaScript library for building user interfaces." },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." }

];

  const [searchWord, setSearchWord] = useState("");
  const [definition, setDefinition] = useState(null);

  const handleSearch = () => {
    const foundWord = dictionary.find(
      (entry) => entry.word.toLowerCase() === searchWord.toLowerCase()
    );
    setDefinition(foundWord ? foundWord.meaning : "Word not found in the dictionary.");
  };


  return (
    <>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Dictionary App</h2>
      <input
        type="text"
        placeholder="Search for a word..."
        value={searchWord}
        onChange={(e) => setSearchWord(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {definition && (
        <div>
          {definition === "Word not found in the dictionary." ? (
            
            <>
              <h3>Definition:</h3>
              <p>{definition}</p>
            </>
          ) : (
            <>
              <h3>Definition:</h3>
              <p>{definition}</p>
            </>
          )}
         
        </div>
      )}
    </div>
    </>
  )
}

export default App
