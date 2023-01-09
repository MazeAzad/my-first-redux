import Navbar from "./navbar";
import CartContainer from "./cartContainer";
import './App.css'
import Modal from "./modal";
import styled from "styled-components";
const Wrapper = styled.main`
    width: 100vw;
    height: 100%;
`;
const App = () => {
    return (
        <Wrapper>
            <Modal />
            <Navbar />
            <CartContainer />
        </Wrapper>
    )
}

export default App;