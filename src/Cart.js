import { useDispatch, useSelector } from "react-redux"
import Card from "../Card";
import { clearItems } from '../utils/cartSlice'

useSelector

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((store) => store.cart.cartItems);
    console.log(cartItems);

    const handleRemoveItems = () => {
        dispatch(clearItems());
    }

    return (
        <>
            <h1>Cart</h1>
            <div className="remove-items">
                <button onClick={handleRemoveItems}>
                    Remove all items
                </button>
            </div>
            <div className="cart-container">
                {
                    cartItems.length && (
                        cartItems.map((item) => <Card key={item?.id} item={item}/>)
                    )
                }
            </div>
        </>
    )
}

export default Cart