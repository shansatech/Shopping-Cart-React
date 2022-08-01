import React from 'react';
import Home from './Home/Home';
import { Routes, Route } from 'react-router-dom'
import LoginForm from './ReactLogin/LoginForm';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LoginForm />}></Route>
      <Route path='/cart' element={<Home />} />
    </Routes>
  )
}

export default App;
