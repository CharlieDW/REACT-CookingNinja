import { NavLink } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

// Styles
import './NavBar.css';

// components
import Searchbar from './Searchbar';

const NavBar = () => {
  const { color } = useTheme();

  return (
    <div className="navbar" style={{ background: color }}>
      <nav>
        <NavLink to="/" className="brand">
          <h1>Cooking Ninja</h1>
        </NavLink>
        <Searchbar />
        <NavLink to="/create">Create Recipe</NavLink>
      </nav>
    </div>
  );
};

export default NavBar;
