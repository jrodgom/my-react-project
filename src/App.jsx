import React, { useState } from 'react';
import './App.css';
import ButtonComponent from './components/ButtonComponent';
import HeaderComponent from './components/HeaderComponent';
import Login from './components/Login';

function App() {
  const [number, setNumber] = useState(0);
  const [myValue, setMyValue] = useState("")

  const [greetings , setGreetings] = useState("Bienvenidos a mi web!")
  const links = {
    home: "Home",
    blogs: "Blogs",
    news: "News",
    contact: "Contact Us"
  }

  const condition = true;

  const [user, setUser] = useState({})

  const login = (userInfo) => {
    console.log(userInfo);
    setUser(userInfo)
  }

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
      <HeaderComponent greetings={greetings} links={links}></HeaderComponent>

      <main className="main-content">
        {user.username && <h2>Hola {user.username}</h2>}

        <Login handleLogin={login}></Login>

        {condition && <h2>La condicion se cumple</h2>}
        {!condition && <h2>La condicion no se cumple</h2>}

        { condition ? (
          <h2>La condicion se cumple</h2>
        ) : (
          <h2>La condicion no se cumple</h2>
        )}
      </main>
    </>
  );
}

export default App;
