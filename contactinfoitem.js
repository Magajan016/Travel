import React from 'react';
import PText from './PText';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import styled from 'styled-components';

const ItemStyles =styled.div`
padding:2 rem;
background-color:var(--deep-dark);
display:flex;
align-items: center;
gap:2rem;
border-radius:8px;
margin-bottom:2rem;


`
function Contactinfoitem({
    icon = <AddLocationIcon></AddLocationIcon>,
    text ='this is an info',
}
){
    return(
        <ItemStyles>
        <div className="icon">{icon}</div>
        <div className="info">
            <PText>{text}</PText>
        </div>
        </ItemStyles>
        
    )
}
export default  Contactinfoitem;