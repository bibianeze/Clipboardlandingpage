import React from "react";
import "../Style/Home.css";
import Cimage from "../../../images/Cimage.jpg";
import Computer from "../../../images/Computer.png";
import Devices from "../../../images/Devices.png";
import { RiFileList3Line } from "react-icons/ri";
import { PiAppStoreLogoBold } from "react-icons/pi";
import { FaEye } from "react-icons/fa";
import Google from "../../../images/Google.png";
import IBM from "../../../images/IBM.png";
import Microsoft from "../../../images/Microsoft.png";
import HP from "../../../images/HP.png";
import Vector from "../../../images/Vector.png";
import green from "../../../images/green.jpg";

const Home = () => {
  return (
    <div className="Body">
      <div className="container">
        <div className="sec1">
          <div className="image">
            <img src={green} alt="" />
          </div>
          <div className="parasec1">
            <h2>A history of everything you copy</h2>
            <p>
              Clipboard allows you to track and organize everything you copy.
              Instantly access your clipboard on all your devices.
            </p>
          </div>
          <div className="secbtn1">
            <button className="btn1">Download for IOS</button>
            <button className="btn2">Download for MAC</button>
          </div>
        </div>
        {/* SECOND SECTION */}

        <div className="sec2">
          <div className="parasec2">
            <h3>Keep Track of your Snippets</h3>
            <p>
              Clipboard instantly stores any item you copy in the cloud, meaning
              you can access your snippets immediately on all your devices. Our
              Mac and iOS apps will help you organize everything.
            </p>
          </div>
          <div className="insidesec2">
            <div className="image2">
              <img src={Computer} alt="" />
            </div>
            <div className="quicksec">
              <h3>Quick Search</h3>
              <p>
                Easily search your snippets by content, category, web address,
                application, and more.
              </p>
              <h3>iCloud Sync</h3>
              <p>Instantly saves and syncs snippets across all your devices.</p>
              <h3>Complete History</h3>
              <p>
                Retrieve any snippets from the first moment you started using
                the app.
              </p>
            </div>
          </div>
        </div>
        {/* 3RD SECTION */}
        <div className="sec3">
          <div className="parasec3">
            <h2>Access Clipboard anywhere</h2>
            <p>
              Whether you’re on the go, or at your computer, you can access all
              your Clipboard snippets in a few simple clicks
            </p>
          </div>
          <div className="image3">
            <img src={Devices} alt="" />
          </div>
        </div>

        {/* 4TH SECTION */}
        <div className="sec4">
          <div className="parasec4">
            <h2>Supercharge your workflow</h2>
            <p>We’ve got the tools to boost your productivity.</p>
          </div>
          <div className="group3">
            <div className="iconsec">
              <RiFileList3Line />

              <div>
                <h3> Create blacklists</h3>
                <p>
                  Ensure sensitive information never makes its way to your
                  clipboard by excluding certain sources.
                </p>
              </div>
            </div>

            <div className="iconsec">
              <PiAppStoreLogoBold />

              <div>
                <h3>Plain text Snippets</h3>
                <p>
                  Remove unwanted formatting from copied text for a consistent
                  look.
                </p>
              </div>
            </div>

            <div className="iconsec">
              <FaEye />

              <div>
                <h3>Sneak Preview</h3>
                <p>
                  Quick preview of all snippets on your Clipboard for easy
                  access.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* logo section */}
        <div className="logo">
          <div className="google">
            <img src={Google} alt="" />
          </div>
          <div className="ibm">
            <img src={IBM} alt="" />
          </div>
          <div className="microsoft">
            <img src={Microsoft} alt="" />
          </div>
          <div className="hp">
            <img src={HP} alt="" />
          </div>
          <div className="vector">
            <img src={Vector} alt="" />
          </div>
        </div>

        {/* last section*/}

        <div className="lastsec">
          <div className="ls">
            <h2>Clipboard for iOS and Mac</h2>
            <p>
              Available for free on the App Store. Download for Mac or iOS, sync
              with iCloud and you’re ready to start adding to your clipboard.
            </p>
          </div>
          <div className="secbtn1">
            <button className="btn1">Download for IOS</button>
            <button className="btn2">Download for Mac</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
