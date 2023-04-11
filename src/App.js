import React from 'react';
import './static/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Hello from './pages/Hello';
import CreateGame from './pages/CreateGame';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/">
          {/* <Route index element={< Home />}/> */}
          {/* <Route path="CreateGame" element={<CreateGame />} /> */}
          <Route index element={< Hello />}></Route>
          <Route path="Hello" element={< Hello />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
