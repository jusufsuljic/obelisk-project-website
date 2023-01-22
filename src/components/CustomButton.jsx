import styled from 'styled-components'

const CustomButton = styled.button`
z-index: 2;
    border-radius: 0px;
    background-color: ${props => (props.secondary ? '#FFF' : '#00A9FF')};
    color: ${props => (props.secondary ? '#00A8E8' : '#FFF')};
    padding: 10px 15px;
    outline: none;
    border: none;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    height: 50px;
    border: 0px;
    -webkit-box-shadow: 4px 6px 7px 2px rgba(0, 23, 31, 0.83);
    -moz-box-shadow: 4px 6px 7px 2px rgba(0, 23, 31, 0.83);
    box-shadow: 4px 6px 7px 2px rgba(0, 23, 31, 0.83);
    transition: all 0.3s ease 0s;
    :hover{
        transform: translateY(-7px);
    }
    

`

export default CustomButton