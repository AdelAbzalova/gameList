import './App.css';
import MainPage from './components/MainPage';
import GamePage from './components/GamePage';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
         <Route path="/" element={<MainPage />} />
         <Route path="/:id" element={<GamePage />} />
       </Routes>

    </div>
  );
}

export default App;
