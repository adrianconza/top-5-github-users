import {Link} from "react-router-dom";
import './index.css';

export const Button = ({person}) => {
    return (
        <div className="button">
            <Link
                to={`/person/${person}`}
            >
                {person}
            </Link>
        </div>
    );
}
