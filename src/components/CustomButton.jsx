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
    //font-weight: bold;
    cursor: pointer;
    height: 50px;
    border: 0px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transition: all 0.3s ease 0s;
    :hover{
        transform: translateY(-7px);
    }
    

`

export default CustomButton