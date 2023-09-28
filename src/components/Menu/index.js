import './Menu.css';
import { Link } from "react-router-dom";

const Menu = () => {
  return(
    <header>
      <nav className="navegacao">
        <Link to="/">
          Home
        </Link>

        <Link to="/contatos">
          Contatos
        </Link>
      </nav>
    </header>
  )
}


export default Menu;