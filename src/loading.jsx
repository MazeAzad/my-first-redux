import styled from "styled-components";
const Wrapper = styled.div`
    .loading 
    {
    width: 100px;
    height: 100px;
    border-radius: 100%;
    border:10px solid #e13e3e;
    border-color: #ff0202 transparent;
    margin:50px auto;
    animation-name: spinner;
    animation-duration: 1000ms;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    
    }
    @keyframes spinner {
        0% {transform:rotate(0deg)}
        25% {transform:rotate(90deg)}
        50% {transform:rotate(180deg)}
        75% {transform:rotate(270deg)}
        100% {transform:rotate(360deg)}
       
       

        
    }

`;
const Loading = () => {
    return <Wrapper >
        <div className="loading"></div>
    </Wrapper>
}
export default Loading;
