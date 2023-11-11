import { Link } from "react-router-dom"
import './Styles.css'

const Header = () => {
    return (
        <div>
            <span>React Context Api</span>
            <ul className="nav">
                <li>
                    <Link to="/">Home Page</Link>
                </li>
                <li>
                    <Link to="/cart">Carts</Link>
                </li>
            </ul>
        </div>
    )
}
export default Header;