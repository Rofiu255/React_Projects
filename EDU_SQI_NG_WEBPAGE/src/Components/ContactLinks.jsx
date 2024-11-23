import React from 'react'

const ContactLinks = () => {
  return (
    <div className="container mt-4">
      <h1
        style={{
          fontFamily: "Poppins, Helvetica, Arial, Lucida, sans-serif",
          fontSize: "42px",
          fontWeight: "600",
          lineHeight: "60.4px",
          color: "rgb(5, 7, 84)",
        }}
      >
        Start here. Change the world.
      </h1>
      <div className="row g-3">
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="card" style={{ width: "100%" }}>
            <div className="card-body">
              <h5 className="card-title" style={titleStyle}>National Innovative Diploma (NID)</h5>
              <p className="card-text"style={descStyle} >
                The National Innovation Diploma (NID) offered at SQI College of
                ICT is a 2 year approved academic program of the National Board
                for Technical Education (NBTE).
              </p>
              <a href="https://edu.sqi.ng/nid/">Learn More</a>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="card" style={{ width: "100%" }}>
            <div className="card-body">
              <h5 className="card-title" style={titleStyle}>Professional Diploma Certificate</h5>
              <p className="card-text" style={descStyle}>
                The Professional Certificate Program is 1 year practical
                training with wide range of edge-cutting IT certification
                courses offered in SQI College of ICT to people who want to
                advance their career.
              </p>
              <a
                href="https://edu.sqi.ng/procert/"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="card" style={{ width: "100%" }}>
            <div className="card-body">
              <h5 className="card-title"style={titleStyle} >Certificate Program</h5>
              <p className="card-text" style={descStyle}>
                The Certificate Program is a short-term training, 2 weeks to 6
                months with a wide range of edge-cutting IT certification
                courses offered in SQI College of ICT to people who want to
                advance their careers.
              </p>
              <a
                href="https://edu.sqi.ng/procert"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactLinks
