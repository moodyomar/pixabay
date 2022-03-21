import React from 'react';
import './Card.css'


const Card = ({img}) => { 

const {views,downloads,likes,comments,webformatURL} = img;
    
return(

<div style={{backgroundImage:`url(${webformatURL}`}} className='Card'>
<p><i className="fa fa-eye" aria-hidden="true"></i> {views}</p>
<p><i className="fa fa-download" aria-hidden="true"></i> {downloads}</p>
<p><i className="fa fa-thumbs-up" aria-hidden="true"></i> {likes}</p>
<p><i className="fa fa-comment" aria-hidden="true"></i> {comments}</p>
</div>

)
}

export default Card