import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="border">
      <ul className="flex justify-between p-4">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navigation;
