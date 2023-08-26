import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Greeting from './components/greeting';

const App = () => {
  return (
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
    </React.StrictMode>
  )
}

export default App
