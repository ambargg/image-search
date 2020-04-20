import React from 'react'

const Photo = props =>  {
    
      return (
        <li className="image">
          <img src={props.url} alt="unsplash" />
        </li>
      );  
  }

  export default Photo