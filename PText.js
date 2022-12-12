import React from 'react';
function PText(){
    return(
        <>
        </>
    )
}
export default  PText;
import React,{Fragment} from 'react';
import './contact.css';
import styled from 'styled-components'

const Contact = () =>{
    const Wrapper = styled.section`
     padding :9rem 0 5rem 0;

     .container {
        margin-top:6 rem;
        text-align: center;
     }
    `;
    return(
        <Wrapper >
            <h2 className="common-heading">Our Contact</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.4729580640533!2d76.92576747776013!3d10.927601458044764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85b823c4ca3d5%3A0x23416a992879b7c4!2sSri%20Krishna%20College%20Of%20Technology!5e0!3m2!1sen!2sin!4v1670779821214!5m2!1sen!2sin"
             width="100%"
              height="450"
             style={{border:0}} 
             allowfullscreen="" 
             loading="lazy" 
             referrerpolicy="no-referrer-when-downgrade"></iframe>

        </Wrapper>
    );
}

export default Contact;