import React from 'react'

import './card-styles.css'

const CardUI = props =>{
    
    return(
      
        <div className="card text-center shadow">
            <div className="overflow">
                <img src={props.imgsrc} alt="image1" className="card-img-top"/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">
                    {props.title}
                </h4>
                <p className="text-secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit modi, numquam provident totam quos amet ab dignissimos error similique unde.
                </p>
                <a href="/" className="btn btn-outline-success">
                    Go Anywhere
                </a>
            </div>
        </div> 
        
    )
}

export default CardUI;