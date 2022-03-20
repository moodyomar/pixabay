import React from 'react';
import { Card } from '../../components';


const Photos = () => { 

const test = [1,2,3,4,5,6,7,8,9]

return(

<div className='Photos' style={PhotosLayout}>
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