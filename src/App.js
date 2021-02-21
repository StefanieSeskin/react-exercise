import logo from './logo.svg';
import './App.css';
import Example from './components/Example'
import HelloWorld from './components/HelloWorld'
import Greet from './components/Greet'
import CounterButton from './components/button1'
import CountFive from './components/button2'
import React, { useState, useEffect } from 'react';


function App() {
  const user1 = {
    name: {
      first: 'John',
      last: 'Smith',
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu4qe35Pjq4CyGhnhnjSwPT8GYjE2DRjyVPA&usqp=CAU"
    },
    phone: '123-4567'
  }
  const user2 = {
    name: {
      first: 'Sarah',
      last: 'Haras',
      photo: "https://raverspeech.com/wp-content/uploads/2020/10/female-provider.png"
    },
  }
  return (
    <div>
      <Example></Example>
      <HelloWorld></HelloWorld>
      <Greet firstName={ user1.name.first }></Greet>
      <Greet firstName={ user2.name.first }></Greet>
      <CounterButton></CounterButton>
      <p><CountFive></CountFive></p>
    </div>
  );
}

export default App;
