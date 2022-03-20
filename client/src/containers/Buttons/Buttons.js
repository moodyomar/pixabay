import React from 'react';
import { Button } from '../../components';


const Buttons = () => { 

return(

    <div style={buttonsLayout}>
    <Button />
    <Button />
    <Button />
    </div>

)
}

const buttonsLayout = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '50px 0px',
}

export default Buttons