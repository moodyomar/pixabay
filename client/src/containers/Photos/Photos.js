import React, { useState } from 'react';
import { Card, Modal } from '../../components';
import {useSelector} from 'react-redux'

const Photos = () => { 

const test = [1,2,3,4,5,6,7,8,9]
const showModal = useSelector(state => state.pixaReducer.showModal)

console.log(showModal);
return(
<div className='Photos' style={PhotosLayout}>
{ showModal && <Modal/> }
{test.map(t => <Card/>)}
</div>

)
}

const PhotosLayout = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap:'wrap',
    justifyContent:'space-between',
    width:'100%',
}

export default Photos