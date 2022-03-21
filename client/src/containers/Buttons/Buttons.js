import React from 'react';
import { Button } from '../../components';
import { openModal,nextPhotos,prevPhotos } from '../../store/actions';

const Buttons = () => { 

return(

    <div style={buttonsLayout}>
    <Button content={'Prev'} direction={'left'} action={prevPhotos()} />
    <Button content={'Categories'} action={openModal()}/>
    <Button content={'Next'} direction={'right'} action={nextPhotos()}/>
    </div>

)
}

const buttonsLayout = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '50px 0px',
}

export default Buttons