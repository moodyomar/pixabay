import React, { useEffect } from 'react';
import { Card, Modal } from '../../components';
import {useSelector} from 'react-redux'

const Photos = () => { 

const test = [1,2,3,4,5,6,7,8,9]
const showModal = useSelector(state => state.pixaReducer.showModal)

useEffect(() => {
apiRequest();
},[])

const apiRequest = () => {
    fetch('/images')
.then(res => console.log(res))
.catch(err => console.log(err))
}

return(
<div className='Photos' style={PhotosLayout}>
{ showModal && <Modal/> }
{test.map(t => <Card/>)}
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