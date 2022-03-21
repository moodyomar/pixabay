import React from 'react';
import { useDispatch } from 'react-redux';
import './Button.css'


const Button = ({content,direction,action}) => { 

    const dispatch = useDispatch();

return(

<button className='Button' onClick={() => dispatch(action)}>
{direction && <i className={`fa fa-chevron-${direction}`}  
style={{order:`${direction === 'left' ? 0 : 1}`}}></i>}
{content}
</button>

)
}

export default Button