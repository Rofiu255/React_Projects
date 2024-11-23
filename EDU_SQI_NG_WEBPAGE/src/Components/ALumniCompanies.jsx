import React, { useState } from "react";

const AlumniCompanies = () => {
  const alumStyle = {
    fontFamily: "Poppins, Helvetica, Arial, Lucida, sans-serif",
    fontSize: "24px",
    fontWeight: "600",
    color: "rgb(51, 51, 51)",
    fontSize: "24px",
    margin: "20px 0",
  };

  // Array of company logos and alt text
  const [companies] = useState([
    {
      src: "https://edu.sqi.ng/wp-content/uploads/2023/03/google.png",
      alt: "Google",
    },
    {
      src: "https://edu.sqi.ng/wp-content/uploads/2023/03/Interswitch.png",
      alt: "Interswitch",
    },
    {
      src: "https://edu.sqi.ng/wp-content/uploads/2023/03/Andela-log-landscape-blue-400px.png",
      alt: "Andela",
    },
    {
      src: "https://edu.sqi.ng/wp-content/uploads/2023/03/Microsoft_logo.png",
      alt: "Microsoft",
    },
    {
      src: "https://edu.sqi.ng/wp-content/uploads/2023/03/Paystack.png",
      alt: "Paystack",
    },
    {
      src: "https://edu.sqi.ng/wp-content/uploads/2023/03/brewery.png",
      alt: "Brewery",
    },
    {
      src: "https://edu.sqi.ng/wp-content/uploads/2023/03/Wema-Bank-Logo.png",
      alt: "Wema Bank",
    },
    {
      src: "https://edu.sqi.ng/wp-content/uploads/2023/03/clan-logo.png",
      alt: "Clan",
    },
    {
      src: "https://edu.sqi.ng/wp-content/uploads/2023/03/edozzier.png",
      alt: "Edozzier",
    },
    {
      src: "https://edu.sqi.ng/wp-content/uploads/2023/03/moneymie.png",
      alt: "Moneymie",
    },
    {
      src: "https://edu.sqi.ng/wp-content/uploads/2023/03/Nigerian_Army.png",
      alt: "Nigerian Army",
    },
    {
      src: "https://edu.sqi.ng/wp-content/uploads/2023/03/aella-credit.png",
      alt: "Aella Credit",
    },
  ]);

  return (
    <div className="container">
      <div>
        <h2 style={alumStyle}>
          Our alumni work at world-class <br /> companies around the world
          including
        </h2>
      </div>
      <div className="container">
        <div className="row">
          <span>
            {companies.map((company, index) => (
              <img
                key={index}
                src={company.src}
                alt={company.alt}
                className="col-sm-12 col-md-6 col-lg-3"
                style={{ width: "150px", height: "auto", margin: "50px" }}
              />
            ))}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AlumniCompanies;
