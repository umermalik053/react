import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

import "./Card.css"

const Card = ({data}) => {
    const { id, name, profession, description, background, profileImage, profileLink } = data;
    const [imageSrc, setImageSrc] = useState(profileImage);
    const navigate = useNavigate();
    const handleButtonClick = () => {
      navigate(`../../pages/Detail/${id}`); 
    };

    const handleImageError = () => {
      setImageSrc("./assets/download.jpeg"); 
    };
    return (
      <div className="card-container">
        <img src={imageSrc} className="card-image" onError={handleImageError} />
        <div className="card-content">
          <h2 className="card-name">{name}</h2>
          <h4 className="card-profession">{profession}</h4>
          <p className="card-description">{description}</p>
          <button className="card-button" onClick={handleButtonClick} >
            View Profile
          </button>
        </div>
      </div>
    );
}

export default Card
