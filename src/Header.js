import { Link } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "../userContext";
import { useSelector } from "react-redux";

export const Header = () => {
    const image = 'https://cdn.dribbble.com/userupload/12722501/file/original-eca9d0ed0ca4323591a13f9019a65cf9.png?resize=400x300&vertical=center'
    const { userName } = useContext(userContext);
    const cartItems = useSelector((store) => store.cart.cartItems);

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
                        <li><Link to="about">About</Link></li>
                        <li><Link to="profile">Profile</Link></li>
                        <li><Link to="cart">Cart {cartItems.length ? cartItems.length + '- items available' : ''}</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
};