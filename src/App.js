import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import SingleCocktail from './pages/SingleCocktail';
import Header from './components/Header';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/cocktail/:id' element={<SingleCocktail />} />

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
