import React from 'react'
import styled from 'styled-components'


const BenefitCard = ({ title, text, icon }) => {

    const Icon = icon;
    return (
        <CardDivContainer>
            <HeaderWithIcon>
                <Icon style={{ fontSize: '1.75rem', verticalAlign: 'middle' }} />
                <h3> {title}</h3>
            </HeaderWithIcon>
            <p>{text}</p>
        </CardDivContainer>
    )
}

export default BenefitCard;

const HeaderWithIcon = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
`

const CardDivContainer = styled.div`
    z-index: 2;
    background: #ffffff;
    box-shadow: -10px -10px 15px rgba(255,255,255,0.5),
            10px 10px 15px rgba(70,70,70,0.12);
    //background: #007EA7;
    padding: 1.1rem;
    height: 40rem;
    width: 21.8rem;
    //box-shadow: 4px 6px 7px 3px rgba(0, 23, 31, 0.83);
    border-radius: 10px;
    border: 1px solid rgba(0, 126, 167, 0.1);
    h3{
        font-size: 1.8rem;
        font-weight: bold;
    }

    p{
        font-size: 1.3rem;
        text-align: start;
    }

    h3, p{
        color: #003459;
    }
    max-width: 400px;
    max-height: 457px;

    @media only screen and (max-width: 600px) {
        height: 22rem;
    }
    @media only screen and (min-width: 600px) {
        height: 25rem;
    }
    
`