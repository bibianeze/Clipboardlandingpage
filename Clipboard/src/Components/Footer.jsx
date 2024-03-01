import React from 'react'
import "../Style/Footer.css"
import Cimage from "../../../images/Cimage.jpg"
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import green from "../../../images/green.jpg"

const Footer = () => {
  return (
    <div>
      <footer className="foot">
        <div className="footimage">
          <img src={green} alt="" />
        </div>
        <div className="parap">
          <div className='p1'>
            <p>FAQ's</p>
            <p>Contact Us</p>
          </div>
          <div className='p2'>
            <p>Privacy Policy</p>
            <p>Press Kit</p>
          </div>
          <p>Install Guide</p>
        </div>
        <div className="groupicon">
          <FaSquareFacebook />
          <FaTwitter />
          <SiInstagram />
        </div>
      </footer>
    </div>
  );
}

export default Footer