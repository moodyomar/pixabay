import React from 'react';
import { useDispatch } from 'react-redux';
import {changeCategory, closeModal} from '../../store/actions'
import './Modal.css'


const Modal = ({isImgDetails=false,details}) => { 
    const categories = ['backgrounds', 'fashion', 'nature', 'science', 'education', 'feelings', 'health', 'people', 'religion', 'places', 'animals', 'industry', 'computer', 'food', 'sports', 'transportation', 'travel', 'buildings', 'business', 'music'];

    const dispatch = useDispatch();

    const onCatChange = (e) => {
        dispatch(changeCategory(e.target.value));
        dispatch(closeModal())
    }

return(

<div className='modal-container'>
<div className="Modal">
{isImgDetails 
? <h1>image details</h1> 
: 
<>
<div onClick={() => dispatch(closeModal())} className="close-btn"><i className="fa fa-times-circle" aria-hidden="true"></i></div>
   <h1>Select a desired category</h1>
   <select name="categories" defaultValue={'Select'} onChange={e => onCatChange(e)}>
       {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
   </select>
</>
}
</div>
</div>

)
}

export default Modal