import React from 'react';

const Career = () => {
  return (
    <section
      className="d-flex flex-column justify-content-center align-items-center"
      id="career"
      style={{
        minHeight: '100vh',
        background: '#fff',
        color: '#000',
      }}
    >
      <div className="container text-center">
        <h1 className="display-4 mb-4">Join Our Team</h1>
        <p className="lead">
          Discover exciting opportunities and contribute to our mission.
        </p>
        <p>
          We are always looking for talented individuals to join our team and
          make a difference. Explore the available positions and start your
          journey with us.
        </p>
        <button className="btn btn-dark mt-3">View Open Positions</button>
      </div>
    </section>
  );
};

export default Career;
