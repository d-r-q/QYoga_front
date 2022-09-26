import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [info, setInfo] = useState(false)

  useEffect(() => {
    axios.get("http://localhost:8080")
    .then((response) => {
      const info = response.data
      setInfo(info)
      console.log(info)
    })
  }, [])


  return (
    <div className="App">
      <header className="App-header">
        <h2>Some info from backend: {String(info)}</h2>
      </header>
    </div>
  );
}

export default App;
