import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { formatDistanceToNow } from "date-fns"; // for displaying "time ago"

const RatingMessages = () => {
  // Example review data with profile pic, reviewer name, and timestamp
  const [messages] = useState([
    {
      rating: 5,
      message:
        "Coming to SQI has made me believe that life has more to offer.Talking about being experienced in ICT rapidly, SQI deserves uncountable recommendations.Thank u SQI for making me believe more in myself, thanks for bringing out some qualities that I'll never think of years to come in my life.My heart is full of gratitude",
      name: "John Doe",
      profilePic: "https://lh3.googleusercontent.com/a/AATXAJxfOQSATjTc1-kV8LVla7Pf0JKT9cJyq4oOjUX1=s56-c0x00000000-cc-rp-mo",
      time: new Date(2023, 9, 10),
    },
    {
      rating: 4,
      message:
        "I've compared other platforms to this one to be honest and they don't measure up. The platforms that give a comparable level of the quality of skills cost a lot more and don't even offer a guarantee of access to real world project and situations... The ones available at a cheaper price so to say do not give a level of quality even close to it... Some platforms charge a lot more and yet still falter in the delivery of good contents... Another aspect that I noticed in comparison is that instructors at SQI College of ICT are actually interested in ensuring their students understand what they are learning. They take joy in ensuring the students comprehend and are able to apply what is being taught and explain in the simplest ways possible to ensure maximum comprehension....I'm not sharing this because I have any affiliation with SQI College of ICT, I'm doing so because it's simply the truth. If anyone else tries to make their research, they will find out that it's true too.",
      name: "Jane Smith",
      profilePic: "https://lh3.googleusercontent.com/a-/AOh14GjBzR2k6b4lPypTKucRW-ojHCsN0YKKyBBDBipW9A=s56-c0x00000000-cc-rp-mo",
      time: new Date(2023, 8, 20),
    },
    {
      rating: 5,
      message:
        "SQI is one of the things I’m thankful for in my life. I’ve spent six months in SQI and I can say it’s one of the best moments in my life. The staffs are accommodating and very excellent at their job. The tutors don’t just teach, they mentor students. They make coding fun and understandable for learners. I’m able to achieve a lot enrolling with them. I’ve been able to build amazing web projects under their tutelage. ENROLL WITH SQI AND YOU WILL BE PROUD YOU DID.",
      name: "Sam Johnson",
      profilePic: "https://lh3.googleusercontent.com/a-/AOh14GhMlEz7F5wu-z0sta155WPMKVKyy4y-DnWx6cBH9A=s56-c0x00000000-cc-rp-mo",
      time: new Date(2023, 9, 5),
    },
  ]);

  const containerStyle = {
    display: "flex",
    flexDirection: "row", // Display reviews in a row
    flexWrap: "wrap", // Wrap rows when the width overflows
    maxHeight: "400px", // Adjust the height as needed
    overflowY: "auto",
    padding: "10px",
    gap: "20px", // Space between rows
    backgroundColor: "white",
  };

  const messageStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between", // Ensures elements are spaced evenly
    padding: "15px",
    width: "250px", // Set width of each review
    height: "300px", // Fix the height for equal-sized containers
    borderBottom: "none",
    backgroundColor: "white",
    borderRadius: "10px",
    marginBottom: "10px",
    marginBottom: "10px",
    overflow: "hidden", // Prevent overflow from the container
    position: "relative",
  };

  const starsStyle = {
    color: "#FFD700", // Gold color for stars
    marginBottom: "10px",
  };

  const profileStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "10px",
  };

  const imageStyle = {
    width: "50px",
    height: "50px",
    borderRadius: "50%", // Circular image
    objectFit: "cover",
  };

  const googleLogoStyle = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    objectFit: "cover",
  };

  const messageContentContainerStyle = {
    flexGrow: 1,
    overflowY: "auto", // Allow individual scrolling
    paddingRight: "5px", // Add some padding for a clean look
  };

  const messageContentStyle = {
    maxHeight: "150px", // Limit the height of the message content area
    overflowY: "auto", // Allow scrolling within this area
  };

  const reviewerInfoStyle = {
    display: "flex",
    flexDirection: "column",
    marginLeft: "10px",
  };

  const timeAgoStyle = {
    fontSize: "12px",
    color: "#888",
  };

  const cylinderStyle = {
    width: "10px",
    height: "50px",
    backgroundColor: "#3498db", // Cylinder color
    borderRadius: "5px", // To give it a rounded look
    marginRight: "10px",
    animation: "moveUpDown 2s ease-in-out infinite", // CSS animation
  };

  const iframeStyle = {
    keyframes: `@keyframes moveUpDown {
      0% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
      100% { transform: translateY(0); }
    }`,
  };

  return (
    <div className="container mt-4">
      <div>
        <h2
          style={{
            fontFamily: "Poppins, Helvetica, Arial, Lucida, sans-serif",
            fontSize: "48px",
            fontWeight: "600",
            lineHeight: "57.6px",
            color: "rgb(51, 51, 51)",
            marginTop:'70px'
          }}
        >
          Testimonials
        </h2>
        <p>
          Read what our current students and alumni have to say about their SQI <br />
          experience.
        </p>
      </div>
      <div className="">
        <div style={containerStyle} className="container mt-5 d-flex bd-highlight">
          <div style={messageStyle}>
            <div>
              <div style={{ display: "flex", alignItems: "center" }}>
                {/* Profile Picture */}
                <img
                  src="https://via.placeholder.com/50" // Provide the image URL directly
                  alt="Profile"
                  style={imageStyle}
                />
              </div>
              <div>
                {/* Name and Time Ago */}
                <div style={reviewerInfoStyle}>
                  <strong>SQI College of ICT IBADAN</strong>
                </div>
              </div>

              {/* Rating Stars */}
              <div style={starsStyle}>
                <FaStar size={20} color="#FFD700" />{" "}
                {/* Provide static stars with direct values */}
                <FaStar size={20} color="#FFD700" />
                <FaStar size={20} color="#FFD700" />
                <FaStar size={20} color="#FFD700" />
                <FaStar size={20} color="#ccc" />{" "}
                {/* Less than 5 stars can use grey */}
              </div>
              <div>
                <p>Based on 84 reviews</p>
              </div>
              <div>
                <img
                  src="https://edu.sqi.ng/wp-content/plugins/widget-google-reviews/assets/img/powered_by_google_on_white.png"
                  alt="Powered google image"
                  style={{ width: "150px", height: "auto", margin: "2px" }}
                />
              </div>
              <div>
                <a
                  href="https://search.google.com/local/writereview?placeid=ChIJnZjZlJ0SNxARqkeE7CEGSXg"
                  className="btn btn-primary"
                  role="button"
                >
                  review us on{" "}
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/768px-Google_%22G%22_Logo.svg.png"
                    alt="#"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div style={containerStyle} className="container-fluid d-flex bd-highlight">
          {messages.map((msg, index) => (
            <div key={index} style={messageStyle}>
              <div>
                {/* Reviewer Info Row */}
                <div style={profileStyle}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    {/* Profile Picture */}
                    <img src={msg.profilePic} alt="Profile" style={imageStyle} />
                    {/* Name and Time Ago */}
                    <div style={reviewerInfoStyle}>
                      <strong>{msg.name}</strong>
                      <span style={timeAgoStyle}>
                        {formatDistanceToNow(new Date(msg.time))} ago
                      </span>
                    </div>
                  </div>
                  {/* Google Logo */}
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/768px-Google_%22G%22_Logo.svg.png"
                    alt="Google Logo"
                    style={googleLogoStyle}
                  />
                </div>

                {/* Rating Stars */}
                <div style={starsStyle}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar
                      key={i}
                      size={20}
                      color={i < msg.rating ? "#FFD700" : "#ccc"}
                    />
                  ))}
                </div>

                {/* Message Content */}
                <div style={messageContentContainerStyle}>
                  <p style={messageContentStyle}>{msg.message}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
       </div> 
    </div>
  );
};

export default RatingMessages;
