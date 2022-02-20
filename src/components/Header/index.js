import {Link} from "react-router-dom";
import './index.css';

export const Header = ({goBack = false}) => {
    return (
        <header className="header">
            {goBack && (
                <Link to="/">
                    {'< Back'}
                </Link>
            )}
            <span>Home</span>
        </header>
    );
}
