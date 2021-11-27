import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import './App.css';
import Header from './components/Header';

function App() {
  type Message = string;
  const [message, setMessage] = useState<Message | undefined>(undefined);

  useEffect(() => {
    // console.log(process.env.REACT_APP_NOT_SECRET_CODE);
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
      <Button variant="contained">Click me!</Button>
    </div>
  );
}

export default App;
