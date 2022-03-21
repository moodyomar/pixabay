import React, { useEffect } from 'react';
import { Card, Modal } from '../../components';
import {useDispatch, useSelector} from 'react-redux'
import { getPhotos } from '../../store/actions';

const Photos = () => { 

const test = [1,2,3,4,5,6,7,8,9]
const {showModal,photos} = useSelector(state => state.pixaReducer)

const dispatch = useDispatch();

useEffect(() => {
dispatch(getPhotos());
},[])


return(
<div className='Photos' style={PhotosLayout}>
{ showModal && <Modal/> }
{photos.map(photo => <Card key={photo.id} imgUrl={photo.webformatURL} />)}
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