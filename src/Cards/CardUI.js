import React from 'react'
import coder1 from '../Assets/coder1.jpg'
import './card-styles.css'

const CardUI = props =>{
    
    return(
      
        <div className="card text-center">
            <div className="overflow">
                <img src={coder1} alt="image1" className="card-img-top"/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">
                    Card Title
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