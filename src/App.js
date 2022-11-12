import './static/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import CreateGame from './pages/CreateGame';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/">
          <Route  index element={<Home />}/>
          <Route path="CreateGame" element={<CreateGame />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
