import styled from 'styled-components';

export const PrimaryBtn = ({ children }) => {


    
    return (
        <Button background="navy" color="white" border="navy">{children}</Button>
    )
} 

export const SecondaryBtn = () => {
    return (
        <Button background="white" color="navy" border="navy">Secondary</Button>
    )
} 

export const AlertBtn = () => {
    return (
        <Button background="red" color="white" border="red">Alert</Button>
    )
} 

const Button = styled.button`
    background-color: ${(props) => props.background};
    color: ${(props) => props.color};
    font-size: 16px;
    margin: 10px 15px;
    padding: 15px 25px;
    border: 2px solid ${(props) => props.border};
    border-radius: 5px;
    cursor: pointer;
`