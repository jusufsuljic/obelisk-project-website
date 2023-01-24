import styled from 'styled-components'
import React from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import CustomSubscribeForm from './CustomSubscribeForm'

//U a41fc6603658d2685e46c129a
// ID 71afb1a654

const uVar = "a41fc6603658d2685e46c129a"
const idVar = "71afb1a654"
const postUrl = `https://app.us21.list-manage.com/subscribe/post?u=${uVar}&id=${idVar}`

const MailChimpForm = () => {
  return (
    <MailChimpFormContainer>
        <MailchimpSubscribe
         url={postUrl}
         render={({ subscribe, status, message }) => (
            <CustomSubscribeForm
                status={status} 
                message={message}
                onValidated={formData => subscribe(formData)}
            />
        )}/>
    </MailChimpFormContainer>
  )
}

export default MailChimpForm

const MailChimpFormContainer = styled.div`
    
`