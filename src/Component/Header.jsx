import {Link} from "react-router-dom";
import './Header.scss'

const Header = () => {
    return(
        <header> 
            <h1> Mon Blog de Petits Poneys</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/poneys">Poney</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/about">A propos</Link></li>
                    <li><Link to="/poneytalk"> Poney talk</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;