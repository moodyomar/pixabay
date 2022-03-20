import React from 'react';
import './Button.css'


const Button = ({content,direction}) => { 

return(

<buttons className='Button'>
{direction && <i class={`fa fa-chevron-${direction}`}  
style={{order:`${direction === 'left' ? 0 : 1}`}}></i>}
{content}
</buttons>

)
}

export default Button