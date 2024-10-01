import styled from "styled-components"

// export this styled component to be used in any other file
export const MainButton = styled.button`
    font-size: 16px;
    margin: 10px 15px;
    padding: 15px 25px;
    background: ${(props) => props.$bgCol};
    border: none;
    border-radius: 5px;
    cursor: pointer;
    
    &:hover {
        font-size: 20px;
    }
`