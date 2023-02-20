import React from 'react'
import styled from 'styled-components'
import CertImg from '../images/cert_img.svg'
import CustomButton from './CustomButton'
import bgImage from '../images/low-poly-grid-haikei.svg'
import { PopupButton } from 'react-calendly'

const Base = ({ scrollFn, rootElement }) => {
    return (
        <BaseContainer>
            <TextAndButton>
                <h1>DIGITAL DOCUMENT VERIFICATION SYSTEM</h1>
                <p>Issue and manage digitally signed documents</p>
                {/* <CustomButton onClick={() => scrollFn()}>GET STARTED</CustomButton> */}
                <PopupButton
                    className="calendly-btnn"
                    url="https://calendly.com/docunique/30min"
                    rootElement={rootElement}
                    text="BOOK A DEMO"
                />
            </TextAndButton>
            <img src={CertImg}></img>
        </BaseContainer>
    )
}

export default Base



const BaseContainer = styled.div`
    .calendly-btnn{
        z-index: 2;
        border-radius: 5px;
        background-color: #00A9FF;
        color:  #FFF;
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
    }
/* :before{
    background-image: url(${bgImage});
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    opcaity:0.1;
} */
    
   
            
    display: flex;
    flex-direction: row;
    padding-left: 3.25rem;
    padding-right: 3.25rem;
    //justify-content: space-between;
    gap: 5rem;

    @media only screen and (max-width: 600px) {
    flex-wrap: wrap;

        img{
            max-width: 85vw;
        }
        
    }

    @media only screen and (min-width: 600px) {

        img{
            max-width: 20rem;
        }
        
    }

    
`

const TextAndButton = styled.div`
    display: flex;
    flex-direction: column;
    h1{
        color: #ffffff;
        font-size: 4.25rem;
        font-weight: bold;
    }

    p{
        color: #ffffff;
        font-size: 1.87rem;

    }

    button{
        margin-top: 20px;
        width: 20rem;
        @media only screen and (min-width: 600px) {
            margin-bottom: 40px;
        }
        @media only screen and (min-width: 300px) and (max-width: 1000px) {
            width: 30rem;
        }
    }
`