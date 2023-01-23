import React from 'react'
import styled from 'styled-components'
import CertImg from '../images/cert_img.svg'
import CustomButton from './CustomButton'
import bgImage from '../images/low-poly-grid-haikei.svg'

const Base = () => {
    return (
        <BaseContainer>
            <TextAndButton>
                <h1>DIGITAL DOCUMENT VERIFICATION SYSTEM</h1>
                <p>Issue and manage digitally signed documents</p>
                <CustomButton>GET STARTED</CustomButton>
            </TextAndButton>
            <img src={CertImg}></img>
            
        </BaseContainer>
    )
}

export default Base



const BaseContainer = styled.div`
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
    }
`