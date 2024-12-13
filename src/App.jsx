import React, { useState } from 'react';
import './App.css';
import ButtonComponent from './components/ButtonComponent';
import HeaderComponent from './components/HeaderComponent';

function App() {
  const [number, setNumber] = useState(0);

  const addOne = () => {
    setNumber(number + 1);
    console.log(number);
  };

  const sayHello = () => {
    console.log("Hello");
  };

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      <HeaderComponent />
      <main className="main-content">
        <h2 onClick={sayHello}>Hola que tal</h2>
        <h2 onClick={addOne}>Number: {number}</h2>
        <input type="text" onChange={handleChange} />
        <br />
        <br />
        <ButtonComponent />
      </main>
    </>
  );
}

export default App;
