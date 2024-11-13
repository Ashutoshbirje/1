import React from "react";
import "./Home.css";
import { Link } from "react-router-dom"; 
// import {useNavigate }  from "react-router-dom"; // Import Link from react-router-dom
  const Home = () => {

    // const navigate = useNavigate(); // Initialize useNavigate

    // const handleProfileClick = () => {
    //   navigate('/profile'); // Redirect to the Profile section on click
    // };

  return (
    <div>
      <div className="hero-section">
        <div className="hero-section1">
          <div className="hero-content">
            <div className='hero-part_A'>
              <h1>Home</h1>
              {/* <h1>
                <div>We provide <span className="highlight typing-effect blink">medical</span></div>
                services that you can<div><span className="highlight typing-effect blink">trust </span>!</div>
              </h1> */}
            </div>
            <div className='hero-part_B'>
              {/* <p>
                Join ArogyaSathi today and take control of your health with the support of a secure, innovative, and personalized digital healthcare experience.
              </p> */}
            </div> 
            <div className="hero-buttons">
              {/* To navigate other location */}
              {/* <Link to="/get-started">
                <button className="get-started-btn">GET STARTED</button>
              </Link>
              <Link to="/get-appoint">
                <button className="get-appoint-btn">GET APPOINT</button>
              </Link> */}
              {/* <Link to="/profile"> */}
                {/* <button className="get-appoint-btn" onClick={handleProfileClick}>Profile</button> */}
              {/* </Link> */}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
