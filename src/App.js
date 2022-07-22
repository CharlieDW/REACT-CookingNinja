import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useTheme } from './hooks/useTheme';

// Page Components
import Navbar from './components/NavBar';
import Home from './Pages/home/Home';
import Create from './Pages/create/Create';
import Search from './Pages/search/Search';
import Recipe from './Pages/recipe/Recipe';
import ThemeSelector from './components/ThemeSelector';

// Styles
import './App.css';

function App() {
  const { mode } = useTheme();

  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
        <Navbar />
        <ThemeSelector />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/search" element={<Search />} />
          <Route path="/recipes/:id" element={<Recipe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
