import React, { useState, useEffect } from 'react';
import './App.css';
import './components/Header';
import Header from './components/Header';

function App() {
  const [message, setMessage] = useState(null);

  useEffect(() => {
    fetch(`/api`)
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="App">
      <Header />
      <p>
        {!message ? 'Loading...' : message}
      </p>
    </div>
  );
}

export default App;
