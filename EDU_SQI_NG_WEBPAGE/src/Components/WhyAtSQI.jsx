import React from "react";

const WhyAtSQI = () => {
  const whySQI = [
    {
      logo: "https://edu.sqi.ng/#:~:text=study%20at%20SQI%3F-,%EE%80%8A,-Project%20Based%20Learning",
      h3: "Project Based Learning",
      description:
        "Our courses are practical, hands-on learning. Practice and apply knowledge with real world projects that contribute largely to your portfolio.",
    },
    {
      logo: "https://edu.sqi.ng/#:~:text=to%20your%20portfolio.-,%EF%97%9A,-Expert%20Instructors",
      h3: "Expert Instructors",
      description:
        "Get to interact with different mentors and draw from their loads of experience.",
    },
    {
      logo: "https://edu.sqi.ng/#:~:text=loads%20of%20experience.-,%EF%9D%B3,-Physical%20%26%20Virtual%20Class",
      h3: "Physical & Virtual Class",
      description:
        "You can now choose physical class experience or online classroom and learn from anywhere in the world.",
    },
    {
      logo: "https://edu.sqi.ng/#:~:text=in%20the%20world.-,%EF%93%95,-Free%20access%20to",
      h3: "Free access to our hub and community",
      description:
        "You will have access to our fully functional hub for co-working and working on projects, assignments and even begin a start-up.",
    },
    {
      logo: "https://edu.sqi.ng/#:~:text=a%20start%2Dup.-,%EF%95%99,-Certification",
      h3: "Certification",
      description:
        "Be certified by an accredited and globally recognized institution. SQI got its accreditation in Sept 2021 from the NBTE, Nigeria.",
    },
    {
      logo: "https://edu.sqi.ng/#:~:text=the%20NBTE%2C%20Nigeria.-,%EF%82%86,-Alumni%20Support",
      h3: "Alumni Support",
      description:
        "Our students have access to alumni who currently work at top tech organizations in the world such as Google, Microsoft, Interswitch etc.",
    },
    {
      logo: "https://edu.sqi.ng/#:~:text=Microsoft%2C%20Interswitch%20etc.-,%EE%83%B4,-Job%20Opportunity",
      h3: "Job Opportunity",
      description:
        "78.5% of our students found secure employment within three months of graduation. Students leave from learning to getting job roles.",
    },
    {
      logo: "https://edu.sqi.ng/#:~:text=getting%20job%20roles-,%EF%80%AD,-Access%20to%20study",
      h3: "Access to study materials",
      description:
        "Students have access to prerecorded videos and resources they can make use of to further solidify their knowledge.",
    },
  ];

  const containerStyle = {
    display: "flex",
    flexDirection: "row", // Display reviews in a row
    flexWrap: "wrap", // Wrap rows when the width overflows
    maxHeight: "100%", // Adjust the height as needed
    overflowY: "hidden", // Vertical scroll if needed
    overflowX: "hidden", // Prevent side scroll
    padding: "5px",
    gap: "50px", // Space between rows
    backgroundColor: "white",
  };

  const messageStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between", // Ensures elements are spaced evenly
    padding: "15px",
    width: "350px", // Set width of each review
    height: "161px", // Fix the height for equal-sized containers
    borderBottom: "none",
    backgroundColor: "white",
    borderRadius: "10px",
    marginBottom: "10px", // Corrected redundancy
    overflow: "hidden", // Prevent overflow from the container
    position: "relative",
  };

  return (
    <div className="container mt-5">
      <div className="row g-0 position-relative d-flex bd-highlight">
        <div className="col-md-9 mb-md-0 p-md-4">
          <div style={containerStyle} className="container-fluid d-flex bd-highlight">
            {whySQI.map((item, index) => (
              <div key={index} style={messageStyle}>
                <div class='bootrap3-icons'>
                    <ul>
                        <li>
                            <span class='glyphicon glyphicon-asterik'></span>
                        </li>
                    </ul>
                </div>
                <img src={item.logo} alt={item.h3} />
                <h5>{item.h3}</h5>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-3">
          <img
            src="./assets/WhyAtSQI.jpg"
            className="w-100"
            alt="Why at SQI"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyAtSQI;
