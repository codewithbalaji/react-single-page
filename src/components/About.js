import React from 'react';

const About = () => {
  return (
    <section
      className="d-flex flex-column justify-content-center align-items-center"
      id="about"
      style={{
        minHeight: '100vh',
        background: '#f0f4f4',
        color: '#000',
      }}
    >
      <div className="container text-center">
        <h1 className="display-4 mb-4">Discover Our Story</h1>
        <p className="lead">
          Learn more about our journey and commitment to excellence.
        </p>
        <p>
          Founded in 2023, we've been dedicated to delivering innovative
          solutions to our clients. Our team of experts is passionate about
          solving challenges and making a positive impact.
        </p>
        <button className="btn btn-dark mt-3">Read More</button>
      </div>
    </section>
  );
};

export default About;
