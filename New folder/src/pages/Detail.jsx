import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FaFacebook,FaLinkedin ,FaInstagram,FaYoutube ,FaTwitter } from "react-icons/fa";

import "./detail.css";
const Detail = ({ profiles }) => {
  const { id } = useParams();


  const profile = profiles.find((profile) => profile.id === id);
  const [imageSrc, setImageSrc] = useState(profile.profileImage);
  const handleImageError = () => {
    setImageSrc("../../public/assets/download.jpeg"); 
  };
  return (
    <div className="profile-card">
      <div className="profile-card__header">
        <img
          src={profile.background}
          alt="Profile background"
          className="profile-card__header-bg"
        />
        <div className="profile-card__image-container">
          <img
            src={imageSrc}
            alt="Profile"
            className="profile-card__image"
            onError={handleImageError}
          />
        </div>
      </div>
      <div className="profile-card__body">
        <h2 className="profile-card__name">Chisom Chukwukwe</h2>
        <p className="profile-card__title">UI/UX Designer</p>
        <p className="profile-card__description">
          Hardworking and reliable UI/UX designer focused on going above and
          beyond to support teams and serve customers.
        </p>
        <div className="profile-card__socials">
          <a href={profile.profileLink} className="social-icon">
          <FaFacebook className="facebook" />
          </a>
          <a href="#" className="social-icon">
          <FaLinkedin className="linkedin" />
          </a>
          <a href="#" className="social-icon">
          <FaInstagram className="insta" />
          </a>
          <a href="#" className="social-icon">
          <FaYoutube className="youtube" />
          </a>
          <a href="#" className="social-icon">
          <FaTwitter className="twitter" />
          </a>
        </div>
        <div className="btnDiv">
          <button className="profile-card-btn">Buy me a Coffee</button>
        </div>
      </div>
    </div>
  );

  // return (
  //   <div>
  //     <h1>{profile.name}</h1>
  //     <img src={profile.profileImage} alt={profile.name} />
  //     <h3>{profile.profession}</h3>
  //     <p>{profile.description}</p>
  //   </div>
  // );
};

export default Detail;
