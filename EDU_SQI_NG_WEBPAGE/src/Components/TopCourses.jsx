import React from "react";
import Card from "./Card";

const TopCourses = () => {
  const titleStyle = {
    fontFamily: "Poppins, Helvetica, Arial, Lucida, sans-serif",
    fontSize: "20px",
    fontWeight: "600",
    color: "rgb(5, 7, 84)",
  };

  const descStyle = {
    fontFamily: "Poppins, Helvetica, Arial, Lucida, sans-serif",
    fontSize: "14px",
    fontWeight: "400",
    color: "rgb(71, 71, 71)",
  };

  return (
    <div className="container mt-4">
      <div className="row g-5">
        <div >
          <div>
            <h1
              style={{
                fontFamily: "Poppins, Helvetica, Arial, Lucida, sans-serif",
                fontSize: "42px",
                fontWeight: "600",
                lineHeight: "60.4px",
                color: "rgb(5, 7, 84)",
              }}
            >
              Our Top Courses
            </h1>
            <p>Take a look at some of our popular courses</p>
            <a href="https://edu.sqi.ng/procert/">View all Courses</a>
          </div>
        </div>


        {/* Card 1 */}
        <Card className="col-sm-12 col-md-6" style={{ backgroundColor:"#" }}>
          <div
            className="card"
            style={{ width: "80%", margin: "56px", border: "none", backgroundColor:"#D5EAF3" }}
          >
            <img
              src="https://edu.sqi.ng/wp-content/uploads/2023/01/software-engineering-630x330-1.webp"
              className="card-img-top"
              alt="National Innovative Diploma (NID)"
              style={{ borderRadius: "12px" }}
            />
            <div className="card-body">
              <h5 className="card-title" style={titleStyle}>
                Software Engineering
              </h5>
              <p className="card-text" style={descStyle}>
                Software Engineering is one of the most in-demand jobs across
                the globe today. <br />
                <br />
                Software Engineers are also known as programmers, developers or
                coders. They are the ones behind all the apps and software you
                use today either on your phone or computer within your browser.
                Software such as banking apps, booking apps, mailing apps (e.g
                Gmail), Chat apps (e.g WhatsApp) and other Social apps (e.g
                Twitter, Facebook) and many more are created by software
                engineers.
              </p>
              <a href="https://edu.sqi.ng/nid/" className="btn btn-primary">
                Learn More
              </a>
            </div>
          </div>
        </Card>

        {/* Card 2 */}
        <Card className="col-sm-12 col-md-6 bg-warning">
          <div
            className="card bg-warning"
            style={{ width: "80%", margin: "56px", border: "none" }}
          >
            <img
              src="https://edu.sqi.ng/wp-content/uploads/2023/01/DATA-SQI.jpg"
              className="card-img-top"
              alt="Professional Diploma Certificate"
              style={{ borderRadius: "12px" }}
            />
            <div className="card-body">
              <h5 className="card-title" style={titleStyle}>
                Data Science & Analysis
              </h5>
              <p className="card-text" style={descStyle}>
                The eruption of data is transforming indiviuals and businesses.
                Companies either big or small are now expecting their business
                decisions to be based on data-led insight. <br />
                <br />
                Data specialists have a tremendous impact on business strategies
                and marketing tactics because everyone now depends on data to
                formulate improved strategies for the future of their companies.
              </p>
              <a href="https://edu.sqi.ng/procert/" className="btn btn-primary">
                Learn More
              </a>
            </div>
          </div>
        </Card>

        {/* Card 3 */}
        <Card className="col-sm-12 col-md-6 bg-success">
          <div
            className="card bg-success"
            style={{ width: "80%", margin: "56px", border: "none" }}
          >
            <img
              src="https://edu.sqi.ng/wp-content/uploads/2023/03/product.jpg"
              className="card-img-top"
              alt="Certificate Program"
              style={{ borderRadius: "12px" }}
            />
            <div className="card-body">
              <h5 className="card-title" style={titleStyle}>
                UI/UX – Product Design
              </h5>
              <p className="card-text" style={descStyle}>
                More than ever before individuals and businesses are relying on
                digital products and services. From online meeting tools to
                finance, from e-commerce platforms to healthcare and food apps.
                Making an intuitive digital product design is even more import
                at this time as it determines the overall experience of the
                users. <br />
                <br />
                Here, you’ll build your product design skillset from the bottom
                up with lessons, mentorship sessions, and career advice from our
                design professionals.
              </p>
              <a href="https://edu.sqi.ng/procert/" className="btn btn-primary">
                Learn More
              </a>
            </div>
          </div>
        </Card>
        <Card className="col-sm-12 col-md-6 bg-gradient">
          <div
            className="card bg-gradient"
            style={{ width: "80%", margin: "56px", border: "none" }}
          >
            <img
              src="https://edu.sqi.ng/wp-content/uploads/2023/03/digital-literacy.jpg"
              className="card-img-top"
              alt="Professional Diploma Certificate"
              style={{ borderRadius: "12px" }}
            />
            <div className="card-body">
              <h5 className="card-title" style={titleStyle}>
                Digital Literacy
              </h5>
              <p className="card-text" style={descStyle}>
                This course is designed to prepare you for success in a modern
                world full of computers—not only the traditional computers such
                as desktop and notebook PCs but also computers that you interact
                with in other places too, like your bank’s ATM or your
                employer’s computerized cash register. In this course, you will
                learn about the technologies that drive our computerized
                society, including the Internet and local area networks (LANs).{" "}
                <br />
                <br />
                Taking this course will help you become a digitally literate
                person—that is, someone who understands how computer technology
                fits into our modern society and knows how to navigate a variety
                of computing environments.
              </p>
              <a href="https://edu.sqi.ng/procert/" className="btn btn-primary">
                Learn More
              </a>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default TopCourses;
