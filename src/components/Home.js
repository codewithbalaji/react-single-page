import React from 'react';
import Banner from './Banner';
import Chennai from '../pages/Chennai';
import Rameshwaram from '../pages/Rameshwaram';
import Kodaikanal from '../pages/Kodaikanal';
import Ooty from '../pages/Ooty';
import KanyaKumari from '../pages/KanyaKumari';
import Kumbakonam from '../pages/Kumbakonam';
import Madurai from '../pages/Madurai';
import Yercaud from '../pages/Yercaud';
import Theni from '../pages/Theni';
import Hogenakkal from '../pages/Hogenakkal';
import NavSection from './NavSection';

const Home = () => {
  return (
    <section>
      <Banner />
      <div className="text-container text-center mt-4">
        <h3>Tourist Places To Tamil Nadu</h3>
        <h3>Here Are The Top Places To Visit In Tamil Nadu In 2023</h3>
      </div>
      <NavSection />
      <Chennai />
      <Rameshwaram />
      <Kodaikanal />
      <Ooty />
      <KanyaKumari />
      <Kumbakonam />
      <Madurai />
      <Yercaud />
      <Theni />
      <Hogenakkal />
    </section>
  );
};

export default Home;
