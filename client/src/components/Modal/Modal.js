import React from 'react';
import { useDispatch } from 'react-redux';
import {closeModal} from '../../store/actions'
import './Modal.css'


const Modal = () => { 
    const categories = ['backgrounds', 'fashion', 'nature', 'science', 'education', 'feelings', 'health', 'people', 'religion', 'places', 'animals', 'industry', 'computer', 'food', 'sports', 'transportation', 'travel', 'buildings', 'business', 'music'];

    const dispatch = useDispatch();

return(

<div className='modal-container'>
<div className="Modal">
   <div onClick={() => dispatch(closeModal())} className="close-btn"><i class="fa fa-times-circle" aria-hidden="true"></i></div>
   <h1>Select a desired category</h1>
   <select name="categories">
       {categories.map(cat => <option value={cat}>{cat}</option>)}
   </select>
</div>
</div>

)
}

export default Modal