import React from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
const StyledDiv = styled.div`
& button{
    text-align: center;
    padding: 10px 20px;
    font-Size: "18px";
    background-Color: "#E2A1A1";
    color: "#fff";
    border-radius: "25px";
    border-Radius: "5px";
    
}

`;
const Checkbutton = () => {
    return (
        <StyledDiv  >
            <button style={{cursor: "pointer"}}  className='click'>Edite</button>
            <button style={{cursor: "pointer"}} className='click'>Delete</button>
        </StyledDiv >
    );
};

export default Checkbutton;