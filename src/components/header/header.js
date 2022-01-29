import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return(
    <div className="header">
      <h4><Link to="/" className="title">Star DB</Link></h4>
      <ul className="menu">
        <li className="nav-item">
          <Link to="people/" className="nav-link active">People</Link>
        </li>
        <li className="nav-item">
          <Link to="planets/" className="nav-link">Planets</Link>
        </li>
        <li className="nav-item">
          <Link to="starships/" className="nav-link">Starships</Link>
        </li>
        <li className="nav-item">
          <Link to="login/" className="nav-link">Login</Link>
        </li>
        <li className="nav-item">
          <Link to="secret/" className="nav-link">Secret</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header;