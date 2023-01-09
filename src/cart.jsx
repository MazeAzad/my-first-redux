import { HiArrowNarrowDown, HiArrowNarrowUp } from "react-icons/hi";
import styled from "styled-components";
import { increase, decrease, remove } from "./features/cart/cartSlice";
import { useDispatch } from "react-redux";
const Wrapper = styled.section`
    .cart 
    {
        display: flex;
        width: 1200px;
        gap:5px;
        margin: auto;
    }
    img 
    {
        display: block;
        width: 200px;
        height: 180px;
    }
    .infoContainer 
    {
        display: flex;
        width: inherit;
        justify-content: space-between;
    }
    .info 
    {
        padding-top:50px;
    }
    .quantity 
    {
        padding-top:50px;
    }
    .amount 
    {
        padding-left:4px;
    }
    .remove 
    {
        color:purple;
        background-color: inherit;
        border:0;
        cursor: pointer;
    }
`;
const Cart = ({ id, img, price, title, amount }) => {
    const dispatch = useDispatch();
    return (
        <Wrapper>
            <div className="cart">
                <img src={img} alt="image" />
                <div className="infoContainer">
                    <div className="info">
                        <div className="name">{title}</div>
                        <div className="price">{price}</div>
                        <button className="remove" onClick={() => { dispatch(remove(id)) }}>remove</button>
                    </div>
                    <div className="quantity">
                        <div className="upIcon" onClick={() => { dispatch(increase(id)) }}>
                            <HiArrowNarrowUp />
                        </div>
                        <div className="amount">
                            {amount}
                        </div>
                        <div className="downIcon" onClick={() => { dispatch(decrease(id)) }}>
                            <HiArrowNarrowDown />
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Cart;