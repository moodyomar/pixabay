import React, { useEffect } from 'react';
import { Card, Modal } from '../../components';
import {useDispatch, useSelector} from 'react-redux'
import { getPhotos } from '../../store/actions';
import spinner from '../../assets/spinner.gif'

const Photos = () => { 

const {showModal,photos,loading,category,page} = useSelector(state => state.pixaReducer)

const dispatch = useDispatch();

useEffect(() => {
dispatch(getPhotos(category,page));
},[category,page,dispatch])


return(
<div className='Photos' style={PhotosLayout}>
{ showModal && <Modal/> }

{loading 
 ? <img src={spinner} alt="Loading" style={{margin: 'auto'}} />
 : photos.map(img => <Card key={img.id} img={img}/>)}
</div>
)
}

const PhotosLayout = {
    display: 'flex',
    flexWrap:'wrap',
    justifyContent:'space-between',
    width:'100%',
}

export default Photos