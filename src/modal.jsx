import styled from "styled-components";
import { closeModal, openModal } from "./features/modal/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "./features/cart/cartSlice";
const Wrapper = styled.section`
    .madalContainer 
    {
        width: 100vw;
        height: 100%;
        position: fixed;
        top:0;
        display: grid;
        place-items: center;
        background-color: rgba(104, 81, 93, 0.5);
    }
    .modal 
    {
        width: 300px;
        height: 250px;
        background-color: white;
        color:gray;
        text-align: center;
        border-radius: 5px;
    }
    .modalText 
    {
        font-size:1.6rem;
    }
    .modal-buttons 
    {
        display: flex;
        gap:30px;
        width: fit-content;
        margin:auto;
    }
    .cancel 
    {
        background-color: white;
        color:red;
        border:1px solid red;
        padding:10px;
        border-radius: 5px;
        font-weight: bolder;
    }
    .confirm 
    {
        background-color: white;
        color:#BF40BF;
        border:1px solid #BF40BF;
        border-radius: 5px;
        font-weight: bolder;
    }
`;
const Modal = () => {
    const { isOpen } = useSelector((store) => store.modal)
    const dispatch = useDispatch();
    if (isOpen) {
        return (
            <Wrapper>
                <div className="madalContainer">
                    <div className="modal">
                        <div className="modalText">
                            <h4>are you sure</h4>
                            <h4>you want to clear the list</h4>
                        </div>
                        <div className="modal-buttons">
                            <button className="cancel" onClick={() => { dispatch(closeModal()) }}>cancel</button>
                            <button className="confirm"
                                onClick={() => {
                                    dispatch(clearCart())
                                    dispatch(closeModal())
                                }}>confirm</button>
                        </div>
                    </div>
                </div>
            </Wrapper>
        )
    }


}

export default Modal;