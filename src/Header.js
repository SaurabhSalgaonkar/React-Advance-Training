import { Link } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "../userContext";

export const Header = () => {
    const image = 'https://cdn.dribbble.com/userupload/12722501/file/original-eca9d0ed0ca4323591a13f9019a65cf9.png?resize=400x300&vertical=center'
    const { userName } = useContext(userContext);
    return (
        <div className="header-container">
            <div className="logo">
                <img className="logo-image" src={image} />
            </div>
            <div>
            {userName}
                <div className="nav-list">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="About">About</Link></li>
                        <li><Link to="Profile">Profile</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
};