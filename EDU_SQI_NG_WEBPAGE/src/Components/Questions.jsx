import React from "react";
import NextLevel from "./NextLevel";
import LatestNews from "./LatestNews";

const Questions = () => {
  const FAQitems = [
    {
      question: "How do I get into the college",
      answer:
        "We currently have 3 modes of study at SQI College of ICT, the National Innovative Diploma, Professional Diploma Certificate, and Ordinary Professional Certificate Program. You can join us by applying through any of the modes of study.",
    },
    {
      question: "How much is the tution?",
      answer:
        "This depends on the mode and the program you are coming for, National Diploma, Professional Diploma, or short-term professional programs, and then the cost.",
    },
    {
      question: "Are your classes physical or virtual",
      answer:
        "Lectures at SQI College of ICT can either be physical, virtual or blended. You can decide to for anyone that meets your demand",
    },
    {
      question: "Will I get a job after my training?",
      answer:
        "78.5% of our students found secure employment within three months of graduation. Students graduate from class to land job roles immediately.",
    },
  ];
  return (
    <div style={{ backgroundColor: "#090326" }}>
      <div
        className=""
        style={{ backgroundColor: "#090326" }}
      >
        <div className="container">
          <div className="row g-0 position-relative d-flex bd-highlight">
            <div
              className="col-md-6 mb-md-0 p-md-4"
              style={{ marginTop: "50px" }}
            >
              <h4
                className="mt-0"
                style={{
                  fontFamily: "Poppins, Helvetica, Arial, Lucida, sans-serif",
                  fontSize: "16px",
                  fontWeight: "600",
                  lineHeight: "24px",
                  color: "rgb(255, 255, 255)",
                }}
              >
                FAQ
              </h4>
              <h2
                className="mt-0"
                style={{
                  fontFamily: "Poppins, Helvetica, Arial, Lucida, sans-serif",
                  fontSize: "39px",
                  fontWeight: "500",
                  lineHeight: "46.8px",
                  color: "rgb(255, 255, 255)",
                }}
              >
                Frequently Asked <br />
                Questions
              </h2>
              <a
                href=""
                style={{
                  fontFamily: "Poppins, Helvetica, Arial, Lucida, sans-serif",
                  fontSize: "20px",
                  fontWeight: "500",
                  lineHeight: "50px",
                  color: "rgb(208, 167, 63)",
                }}
              >
                Contact us
              </a>
            </div>
            <div className="col-md-6 p-4 ps-md-0" style={{ marginTop: "50px" }}>
              {FAQitems.map((FAQitem, index) => (
                <div key={index}>
                  <h5
                    style={{
                      fontFamily:
                        "Poppins, Helvetica, Arial, Lucida, sans-serif",
                      fontSize: "20px",
                      fontWeight: "500",
                      lineHeight: "30px",
                      color: "rgb(211, 155, 0)",
                    }}
                  >
                    <strong>{FAQitem.question}</strong>
                  </h5>
                  <p
                    style={{
                      fontFamily:
                        "Poppins, Helvetica, Arial, Lucida, sans-serif",
                      fontSize: "16px",
                      fontWeight: "500",
                      lineHeight: "26.4px",
                      color: "rgba(255, 255, 255, 0.8)",
                    }}
                  >
                    <strong>{FAQitem.answer}</strong>
                  </p>
                  <hr style={{ color: "#D0A73F", }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <NextLevel></NextLevel>
      <LatestNews></LatestNews>
    </div>
  );
};

export default Questions;
