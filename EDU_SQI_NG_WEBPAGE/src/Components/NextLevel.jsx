import React from "react";

const NextLevel = () => {
  return (
    <div style={{ backgroundColor: "#000B3F" }}>
      <div className="container mt-5">
        <div className="row g-0 position-relative d-flex bd-highlight">
          <div
            className="col-md-9 mb-md-0 p-md-4"
            style={{ marginTop: "50px" }}
          >
            <h4
              className="mt-0"
              style={{
                fontFamily: "Poppins, Helvetica, Arial, Lucida, sans-serif",
                fontSize: "14px",
                fontWeight: "700",
                lineHeight: "21px",
                color: "rgb(255, 255, 255)",
              }}
            >
              <strong>
                Its time for you to take your tech career to the next level
              </strong>
            </h4>
            <h2
              style={{
                fontFamily: "Poppins, Helvetica, Arial, Lucida, sans-serif",
                fontSize: "56px",
                fontWeight: "700",
                lineHeight: "67.2px",
                color: "rgb(255, 255, 255)",
              }}
            >
              Ready to Get Started?
            </h2>
            <p
              style={{
                fontFamily: "Poppins, Helvetica, Arial, Lucida, sans-serif",
                fontSize: "14px",
                fontWeight: "500",
                lineHeight: "22.4px",
                color: "rgb(255, 255, 255)",
              }}
            >
              <strong>
                We provide and lead others in quality education, service,
                industry, and <br />
                character as well as discipline.
              </strong>
            </p>
            <a
              className="btn btn-primary"
              href="https://scict.edossier.app/admission/#/signup"
              role="button"
              style={{
                marginBottom: "100px",
                borderRadius: "40px",
                height: "50px",
                justifyContent: "center",
                fontSize: "18px",
                fontWeight: "600",
                lineHeight: "23.8px",
                color: "rgb(255, 255, 255)",
                padding:"10px"
              }}
            >
              Join us Today
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextLevel;
