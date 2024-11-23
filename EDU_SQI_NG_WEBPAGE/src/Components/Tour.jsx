import React from "react";

const Tour = () => {
  const containerStyle = {
    position: "relative",
    overflow: "hidden",
  };

  const logoStyle = {
    position: "absolute",
    top: "10px",
    left: "10px",
    width: "50px",
    height: "50px",
    zIndex: 10,
  };

  const dotsStyle = {
    position: "absolute",
    top: "10px",
    right: "10px",
    fontSize: "24px",
    color: "#333",
    cursor: "pointer",
    zIndex: 10,
  };

  const dropdownStyle = {
    position: "absolute",
    top: "40px",
    right: "10px",
    width: "150px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    display: "none", // Initially hidden, toggle on click
    zIndex: 10,
  };

  const toggleDropdown = () => {
    const dropdown = document.getElementById("dropdown-options");
    dropdown.style.display = dropdown.style.display === "none" ? "block" : "none";
  };

  const iframeStyle = {
    width: "100%",
    height: "315px",
    border: "none",
  };

  return (
    <div className="" style={{ height:'500px', justifyContent:'center', backgroundColor: "#090326"}}>
      <div className="container mt-5">
        <div className="row g-0 position-relative d-flex bd-highlight">
          {/* Watermark Overlay */}
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            /*backgroundColor: "rgba(0, 0, 255, 0.1)",*/ // Semi-transparent blue
            zIndex: 0, // Behind other elements
          }}></div>

          <div className="col-md-6 p-4 ps-md-0" style={{ position: "relative", zIndex: 1, marginTop:'70px', borderRadius:'30px' }}>
            <div style={containerStyle}>
              {/* Logo */}
              <img
                src="https://edu.sqi.ng/wp-content/uploads/2019/01/co.jpg" // Replace with your logo URL
                alt="Logo"
                style={logoStyle}
              />
               
              {/* Three Dots for Options */}
              <div style={dotsStyle} onClick={toggleDropdown}>
                &#8942;
              </div>

              {/* Dropdown Menu */}
              <div id="dropdown-options" style={dropdownStyle}>
                <ul style={{ listStyle: "none", padding: "10px", margin: 0 }}>
                  <li>
                    <a href="#option1">Option 1</a>
                  </li>
                  <li>
                    <a href="#option2">Option 2</a>
                  </li>
                  <li>
                    <a href="#option3">Option 3</a>
                  </li>
                </ul>
              </div>

              {/* Video */}
              <video
                controls
                
                src="https://www.youtube.com/watch?v=HgC6bjMbqpw&feature=youtu.be" // Replace with your video URL
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          <div className="col-md-6 mb-md-0 p-md-4" style={{marginTop:'70px'}}>
            <h1
              className="mt-0"
              style={{
                fontFamily: "Poppins, Helvetica, Arial, Lucida, sans-serif",
                fontSize: "48px",
                fontWeight: "700",
                lineHeight: "57.6px",
                color: "rgb(255, 255, 255)",
                position: "relative",
                zIndex: 1, // Bring text above the watermark
              }}
            >
              Take a Tour
            </h1>
            <p
              style={{
                fontFamily: "Poppins, Helvetica, Arial, Lucida, sans-serif",
                fontSize: "16px",
                fontWeight: "500",
                lineHeight: "28.8px",
                color: "rgb(255, 255, 255)",
                position: "relative",
                zIndex: 1, // Bring text above the watermark
              }}
            >
              Our campus is a living centre for innovation and creativity for sustainability. We love showing students our campus and allowing them to see, hear and feel the excitement that comes with being part of the Central community which is an atmosphere that is open-minded, always exciting, and filled with academic excellence.
            </p>
            <a
              className="btn btn-primary"
              href="https://scict.edossier.app/admission/#/signup"
              role="button"
            >
              Start Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tour;

