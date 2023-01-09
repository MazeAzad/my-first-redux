import { useSelector } from "react-redux";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import Cart from "./cart";
import { clearCart, getCartItems } from "./features/cart/cartSlice";
import { closeModal, openModal } from "./features/modal/modalSlice";
import { useEffect } from "react";
import Loading from "./loading";
import Modal from "./modal";
const Empty = styled.section`
    text-align: center;
    font-family:Arial;
    h1{
        font-size: 3rem;
    }
    h4 
    {
        font-size:1.5rem;
    }
`;
const Wrapper = styled.section`
 padding-bottom:100px;
    .cartContainer 
    {
        width:1200px;
        margin:auto;
        
    }
    .line 
    {
        width:1200px;
        height:1px;
        background-color:gray;
        border-bottom:1px solid gray;
        margin:auto;

    }
    .totalPriceContianer 
    {
        width:1200px;
        margin:auto;
        display:flex; 
        justify-content:space-between;
        font-size:1.5rem;
    }
    .clear 
    {
        display: block;
        margin:auto;
        padding:10px;
        background-color: #a57a7a;
        color:white;
        border:0;
        border-radius:5px;
    }
    .bagHeader 
    {
        font-size: 4rem;
        width: fit-content;
        margin:auto;
    }
`;
const CartContainer = () => {
    const { totalAmount, cartItems, totalPrice, isLoading } = useSelector((store) => store.cart);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCartItems());

    }, [])
    if (isLoading) {
        return (
            <Loading />
        )
    }
    else {
        if (totalAmount < 1) {
            return (
                <Empty className="empty-cart-container">
                    <header>
                        <h1>your bag</h1>
                        <h4>is empty</h4>
                    </header>
                </Empty>
            )
        }
        else {
            return (
                <Wrapper>

                    <section className="CartContainer">
                        <div className="bagHeader">
                            <h1>your bag</h1>
                        </div>
                        {cartItems.map((cart) => {

                            return (

                                <Cart  {...cart} key={cart.id} />

                            )
                        })}
                        <div className="line"></div>
                        <div className="totalPriceContianer">
                            <div className="total">total:</div>
                            <div className="totalPrice">{totalPrice}</div>
                        </div>
                        <button className="clear" onClick={() => {
                            dispatch(openModal())
                        }}>clear cart</button>
                    </section>
                </Wrapper>
            )
        }
    }

}

export default CartContainer;