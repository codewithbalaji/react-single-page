import React from 'react';

const Home = () => {
  return (
    <section
      className="d-flex flex-column justify-content-center align-items-center"
      id="home"
      style={{
        minHeight: '100vh',
        background: '#f0f4f4',
        color: '#000',
      }}
    >
      <div className="text-center">
        <h1 className="display-4">Welcome To Senchola</h1>
        <p className="lead">Explore our innovative solutions.</p>
      </div>
    </section>
  );
};

export default Home;
