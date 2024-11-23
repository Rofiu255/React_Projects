import React from 'react';

const RegStartNow = () => {
  return (
    <div className="container mt-5">
      <div className="row g-0 bg-light position-relative d-flex bd-highlight">
        <div className="col-md-6 mb-md-0 p-md-4">
          <h1 
            className="mt-0" 
            style={{
              fontFamily: 'Poppins, Helvetica, Arial, Lucida, sans-serif',
              fontSize: '64px',
              fontWeight: '700',
              lineHeight: '70.4px',
              color: 'rgb(0, 14, 66)'
            }}
          >
            Study to become a global talent
          </h1>
          <p 
            style={{
              fontFamily: 'Poppins, Helvetica, Arial, Lucida, sans-serif',
              fontSize: '18px',
              fontWeight: '500',
              lineHeight: '28.8px',
              color: 'rgb(71, 71, 71)'
            }}
          >
            Learn new tech skills using a world-class curriculum from top industry experts in an accredited institution.
          </p>
          <a className="btn btn-primary" href="https://scict.edossier.app/admission/#/signup" role="button">Start Now</a>
        </div>
        <div className="col-md-6 p-4 ps-md-0">
          <img 
            src="https://edu.sqi.ng/wp-content/uploads/2023/06/bg-header-sqi-1.png" 
            className="w-100" 
            alt="image2" 
          />
        </div>
      </div>
    </div>
  );
};

export default RegStartNow;
