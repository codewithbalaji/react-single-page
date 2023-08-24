import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Kodaikanal = () => {
  return (
    <div id="kodaikanal">
      <br />
      <Container>
        <h3>03.Kodaikanal</h3>
        {/* single card */}

        <div className="card mb-3 border-0">
          <div className="row g-0">
            <div className="col-md-4 d-flex align-items-center">
              <img
                src={require('../assets/banner/Kodaikanal.jpeg')}
                className="img-fluid rounded-start"
                alt="Chennai"
                style={{ maxWidth: 'auto', height: 'auto' }}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">"The Princess of Hill Stations"</h5>
                <p className="card-text">
                  &nbsp;&nbsp;&nbsp;&nbsp;Kodaikanal Tourism Located in the
                  state of Tamil Nadu, Kodaikanal is one of the most famous
                  honeymoon destinations in India. A Lakeside resort town of
                  Tamil Nadu, Kodaikanal has a beautiful climate, mist-covered
                  manicured cliffs and waterfall that come together to create
                  the ideal setting for a perfect getaway. Kodaikanal means 'the
                  gift of the forests'.
                </p>
                <p className="card-text">
                  &nbsp;&nbsp;&nbsp;&nbsp;Nestled amidst the rolling slopes of
                  the Palani Hills, Kodaikanal stands at an altitude of 7200
                  feet above sea level, and once you visit this hill station,
                  you will find that every bit of what you have imagined it to
                  be is real. Kodaikanal is a place you can go to take a break
                  from the rigours of daily city life, and this hill station
                  lets you sit back and connect with nature as you head out on
                  biking or trekking trails or take a stroll through the vast
                  forests surrounding the town. Close
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <br />
      <h3 className="text-center">Must Visit Place In Kodaikanal</h3>
      <br />
      {/* responsive card */}
      <div className="container">
        <div className="row row-cols-auto">
          <div className="col  d-flex align-items-stretch">
            <Card style={{ width: '18rem' }}>
              <Card.Img
                variant="top"
                src={require('../assets/banner/kodaikanal1....jpeg')}
              />
              <Card.Body>
                <Card.Title>Green Valley View</Card.Title>
                <Card.Text>
                  Formerly known as Suicide point, the Green Valley View offers
                  a breathtaking view of the plains, deep...
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </div>
          <div class="col  d-flex align-items-stretch">
            <Card style={{ width: '18rem' }}>
              <Card.Img
                variant="top"
                src={require('../assets/banner/kodaikanal2.jpeg')}
              />
              <Card.Body>
                <Card.Title>Kodai Lake </Card.Title>
                <Card.Text>
                  Kodaikanal Lake is a manmade lake in the Kodaikanal city which
                  is also known as Kodai Lake. Vera...
                </Card.Text>
                <br />
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </div>
          <div class="col  d-flex align-items-stretch">
            <Card style={{ width: '18rem' }}>
              <Card.Img
                variant="top"
                src={require('../assets/banner/kodaikanal3..jpeg')}
              />
              <Card.Body>
                <Card.Title>Bear Shola Falls</Card.Title>
                <Card.Text>
                  Bear Shola Falls Located at a mere distance of 2 kilometres
                  from the Kodaikanal Lake, the Bear Shola Falls is a popular..
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </div>
          <div class="col  d-flex align-items-stretch">
            {' '}
            <Card style={{ width: '18rem' }}>
              <Card.Img
                variant="top"
                src={require('../assets/banner/kodaikanal4.jpeg')}
              />
              <Card.Body>
                <Card.Title>Pillar Rocks</Card.Title>
                <Card.Text>
                  Situated in the 'Princess of Hill stations', Kodaikanal, the
                  Pillar Rocks have become a lovely picnic...
                </Card.Text>
                <br />
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kodaikanal;
