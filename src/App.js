import React from 'react';
import { createStore } from 'redux';
import reducer from './reducers'

import "./App.css"

const initialState ={
  name: 'Alex Bakery',
  location: 'Localhost',
  who: ['Software Engineer', 'Speaker', 'Occasional Model'],
  like: ['cats, black dresses']
}
const store = createStore(reducer, initialState);

function App() {
  return (
    <div className='usercard'>
      <img className='user' src='./user.jpg' alt='Display Picture'></img>
      <hr></hr>
      <div className='about'>
        <p>I am { store.getState().who.join(', ') }</p>
        <p>I like { store.getState().like.join(', ') }</p>
      </div>
      <hr></hr>
      <div className='about'>
        <p>Name: { store.getState().name }</p>
        <p>Location: { store.getState().location }</p>
      </div>
    </div>
  );
}

export default App;
