import styled from "styled-components"
import { FaShoppingBag } from "react-icons/fa";
import { useSelector } from "react-redux";
const Wrapper = styled.section`
    .navbar 
    {
        width: 100vw;
        background-color: #d37373;
        color:white;
        display: flex;
        justify-content: space-between;
        padding:20px 0;
    }
    .title 
    {
        margin-left:50px;
        font-size:1.6rem;
    }
    .logo 
    {
        margin-right:50px;
        font-size:1.6rem;
        display: flex;
        position: relative;
    }
    .logo p 
    {
        position: absolute;
        top:-30px;
        color:black;
        left:15px;
        width: 30px;
        height: 30px;
        border-radius: 100%;
        background-color: #2a87af;
        display: grid;
        place-items: center;
        font-size:1rem;
    }
`;
const Navbar = () => {
    const { totalAmount } = useSelector((store) => store.cart);
    return (
        <Wrapper>
            <nav className="navbar">
                <div className="title">
                    redux toolkit
                </div>
                <div className="logo">
                    <p>{totalAmount}</p>
                    <FaShoppingBag />
                </div>
            </nav>
        </Wrapper>
    )
}

export default Navbar;