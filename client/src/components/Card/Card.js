import React from 'react';
import './Card.css'


const Card = ({imgUrl}) => { 

return(

<div style={{backgroundImage:`url(${imgUrl}`}} className='Card'>
</div>

)
}

export default Card