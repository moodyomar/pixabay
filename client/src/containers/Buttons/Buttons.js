import React from 'react';
import { Button } from '../../components';


const Buttons = () => { 

return(

    <div style={buttonsLayout}>
    <Button content={'Prev'} direction={'left'} />
    <Button content={'Categories'}/>
    <Button content={'Next'} direction={'right'}/>
    </div>

)
}

const buttonsLayout = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '50px 0px',
}

export default Buttons