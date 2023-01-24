import React, { useEffect, useState } from 'react'
import CustomButton from './CustomButton';
import styled from 'styled-components'

const CustomSubscribeForm = ({ status, message, onValidated }) => {
    const [email, setEmail] = useState('');

    useEffect(() => {
        if(status === "success") setEmail('');
      }, [status])

    const onEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
            email.indexOf("@") > -1 &&
            onValidated({
                MERGE0: email,
            });
    }

    return (
        <CustomSubscribeFormContainer id="subscribe-form">
            <h3>Join our email list for future updates</h3>
            {status === "sending" && (
                <div className="mc__alert mc__alert--sending">
                    sending...
                </div>
            )}
            {status === "error" && (
                <div
                    className="mc__alert mc__alert--error"
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}
            {status === "success" && (
                <div
                    className="mc__alert mc__alert--success"
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}
            <FieldsContainer>
                <CustomInputField
                    required
                    type="text"
                    placeholder="your@mail.com"
                    onChange={(e) => onEmailChange(e)}>
                </CustomInputField>
                {
                    status !== "success" &&
                    <CustomButton onClick={(e) => handleSubmit(e)} type="submit">Subscribe</CustomButton>
                }

            </FieldsContainer>

        </CustomSubscribeFormContainer>
    )
}

export default CustomSubscribeForm

const CustomInputField = styled.input`
    height: 2.5rem;
    width: 30rem;
    padding-left: 20px;
    font-size: 1.25rem;
`

const FieldsContainer = styled.form`
display: flex;
flex-direction:row;
gap: 2rem;
justify-content: center;
align-items: center;
align-content: center;
flex-wrap: wrap;


    
`

const CustomSubscribeFormContainer = styled.form`
padding: 3rem;
    border: 2px solid rgba(0,126,167,0.2);
    /* -webkit-box-shadow: 0px 0px 39px -24px rgba(0,0,0,1);
-moz-box-shadow: 0px 0px 39px -24px rgba(0,0,0,1);
box-shadow: 0px 0px 39px -24px rgba(0,0,0,1); */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h3{
        font-size: 1.5rem;
       color: #003459;
       margin-bottom: 50px;
    }
    
`