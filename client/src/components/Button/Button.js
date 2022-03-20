import React from 'react';
import './Button.css'


const Button = ({content,direction,action}) => { 


return(

<button className='Button' onClick={action}>
{direction && <i className={`fa fa-chevron-${direction}`}  
style={{order:`${direction === 'left' ? 0 : 1}`}}></i>}
{content}
</button>

)
}

export default Button