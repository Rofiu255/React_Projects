import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported

const LatestNews = () => {
  const titleStyle = {
    fontFamily: "Poppins, Helvetica, Arial, Lucida, sans-serif",
    fontSize: "20px",
    fontWeight: "700",
    lineHeight: "28px",
    color: "rgb(0, 14, 84)",
  };
  const descStyle = {
    fontFamily: "Poppins, Helvetica, Arial, Lucida, sans-serif",
    fontSize: "14px",
    fontWeight: "500",
    lineHeight: "25.2px",
    color: "rgb(102, 102, 102)",
  };
  const aOne = {
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: "25.6px",
    color: "rgb(0, 0, 0)",
    textDecoration: "none",
  };
  const Date = {
    fontSize: "12px",
    fontWeight: "700",
    lineHeight: "21.6px",
    color: "rgb(247, 130, 126)",
  };
  return (
    <div style={{ backgroundColor: "#D9DBE9", height: "800px", }}>
      <div className="container mt-4" >
        <div
          className="row g-3"
          style={{ marginTop: "70px", marginBottom: "30px" }}
        >
          <h1
            className="col-md-6"
            style={{
              fontFamily: "Poppins, Helvetica, Arial, Lucida, sans-serif",
              fontSize: "42px",
              fontWeight: "600",
              lineHeight: "60.4px",
              color: "rgb(5, 7, 84)",
            }}
          >
            Latest News
          </h1>
          <a
            className="btn btn-primary col-md-6"
            href="https://scict.edossier.app/admission/#/signup"
            role="button"
            style={{
              borderRadius: "40px",
              height: "60px",
              fontSize: "18px",
              fontWeight: "600",
              lineHeight: "23.8px",
              color: "rgb(255, 255, 255)",
              padding: "15px",
              width: "150px",
              marginLeft: "380px",
            }}
          >
            Read More
          </a>
        </div>
        <div className="row g-3">
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div
              className="card"
              style={{ width: "100%", borderRadius: "none" }}
            >
              <a href="https://edu.sqi.ng/sqi-college-of-ict-announces-jamb-cut-off-mark-and-post-utme-exam-date/">
                <img
                  src="https://edu.sqi.ng/wp-content/uploads/2023/07/sqijamb1-400x250.jpg"
                  className="card-img-top"
                  alt="image3"
                />
              </a>
              <div className="card-body">
                <h5 className="card-title" style={titleStyle}>
                  <a
                    href="https://edu.sqi.ng/sqi-college-of-ict-announces-jamb-cut-off-mark-and-post-utme-exam-date/"
                    style={aOne}
                  >
                    SQI College of ICT Announces JAMB Cut-off Mark and Post-UTME
                    Exam Date
                  </a>
                </h5>
                <p>
                  <span style={Date}>Aug 14, 2024</span>
                </p>
                <p className="card-text" style={descStyle}>
                  SQI College of ICT has announced its JAMB/UTME cut-off mark
                  and the schedule for its upcoming Post-UTME examination,
                  offering new opportunities for aspiring tech students in
                  Nigeria. In a statement issued by its admission officer, Mr.
                  Timothy Michael, the college has...
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="card" style={{ width: "100%" }}>
              <a href="https://edu.sqi.ng/sqi-college-of-ict-concludes-14th-annual-ict-scholarship-program-empowering-thousands-across-africa-with-free-tech-education/">
                <img
                  src="https://edu.sqi.ng/wp-content/uploads/2024/08/SQI-Osogbo-400x250.jpg"
                  className="card-img-top"
                  alt="image4"
                />
              </a>
              <div className="card-body">
                <h5 className="card-title" style={titleStyle}>
                  <a
                    href="https://edu.sqi.ng/sqi-college-of-ict-concludes-14th-annual-ict-scholarship-program-empowering-thousands-across-africa-with-free-tech-education/"
                    style={aOne}
                  >
                    SQI College of ICT Concludes 14th Annual ICT Scholarship
                    Program, Empowering Thousands Across Africa with Free Tech
                    Education
                  </a>
                </h5>
                <p>
                  <span style={Date}>Aug 6, 2024</span>
                </p>
                <p className="card-text" style={descStyle}>
                  In a remarkable display of commitment to advancing
                  technological education in Africa, the SQI College of ICT has
                  successfully wrapped up its 14th annual SQI ICT Scholarship
                  Program. The event drew an unprecedented number of
                  participants, with over 8000 registrations...
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="card" style={{ width: "100%" }}>
              <a href="https://edu.sqi.ng/5th-matriculation-ceremony-sqi-college-of-ict/">
                <img
                  src="https://edu.sqi.ng/wp-content/uploads/2024/08/5th-SQI-matriculation-400x250.png"
                  className="card-img-top"
                  alt="image5"
                />
              </a>
              <div className="card-body">
                <h5 className="card-title" style={titleStyle}>
                  <a
                    href="https://edu.sqi.ng/5th-matriculation-ceremony-sqi-college-of-ict/"
                    style={aOne}
                  >
                    5TH MATRICULATION CEREMONY | SQI COLLEGE OF ICT
                  </a>
                </h5>
                <p>
                  <span style={Date}>May 27, 2024</span>
                </p>
                <p className="card-text" style={descStyle}>
                  The Rector, on behalf of the Governing Council, Academic
                  Board, Management, Staff and Students of SQI College of ICT,
                  heartily requests the esteem presence of parents/guardian,
                  friends and the general public at the 5th Matriculation
                  Ceremony of the College. The...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
