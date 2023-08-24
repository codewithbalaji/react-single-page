import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Hogenakkal = () => {
  return (
    <div id="hogenakkal">
      <br />
      <Container>
        <h3>10.Hogenakkal</h3>
        {/* single card */}

        <div className="card mb-3 border-0">
          <div className="row g-0">
            <div className="col-md-4 d-flex align-items-center">
              <img
                src={require('../assets/banner/Hogenakkal.jpeg')}
                className="img-fluid rounded-start"
                alt="Chennai"
                style={{ maxWidth: 'auto', height: 'auto' }}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">
                  "The one that will take your breath away"
                </h5>
                <p className="card-text">
                  &nbsp;&nbsp;&nbsp;&nbsp;Hogenakkal Tourism Hogenakkal is a
                  waterfall located in Dharmapuri district of Tamil Nadu where
                  the Kaveri river splits into multiple streams of waterfalls.
                  Located at a distance of 180 km from Bangalore, Hogenakkal has
                  water throughout the year. The carbonite rocks, the coracle
                  (basket boat) rides, freshwater fish, oil massages by locals
                  make it a perfect one day trip or a weekend getaway from
                  Bangalore.
                </p>
                <p className="card-text">
                  &nbsp;&nbsp;&nbsp;&nbsp;Sometimes referred to as the "Niagara
                  Falls of India," it is also known for the medicinal baths.
                  Also known at Marikottayam, Hoge actually means smoke and Kal
                  means rock. Recently, the place has been found to be littered
                  with plastic bags and garbage and the fish market outside the
                  waterfall might stink. Weekends can be crowded. Keep all these
                  points in mind before visiting..
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <br />
      <h3 className="text-center">Must Visit Place In Hogenakkal</h3>
      {/* responsive card */}
      <div className="container">
        <div className="row row-cols-auto">
          <div className="col  d-flex align-items-stretch">
            <Card style={{ width: '18rem' }}>
              <Card.Img
                variant="top"
                src={require('../assets/banner/hogenakkal1.jpeg')}
              />
              <Card.Body>
                <Card.Title>Theerthamalai Temple</Card.Title>
                <Card.Text>
                  Theerthamalai is a popular pilgrim centre close to Hogenakkal.
                  One of its most popular destinations is the...
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </div>
          <div class="col  d-flex align-items-stretch">
            <Card style={{ width: '18rem' }}>
              <Card.Img
                variant="top"
                src={require('../assets/banner/hogenakkal2..jpeg')}
              />
              <Card.Body>
                <Card.Title>Hogenakkal Falls </Card.Title>
                <Card.Text>
                  Hogenakkal Falls is a scintillating waterfall that is located
                  on river Kaveri in the Dharmapuri district of...
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </div>
          <div class="col  d-flex align-items-stretch">
            <Card style={{ width: '18rem' }}>
              <Card.Img
                variant="top"
                src={require('../assets/banner/hogenakkal3.jpeg')}
              />
              <Card.Body>
                <Card.Title>Pennagram Village</Card.Title>
                <Card.Text>
                  The village is located about 20 km away from Hogenakkal and is
                  famous for its weekly fair that it holds every...
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
                src={require('../assets/banner/hokenakkal4..jpeg')}
              />
              <Card.Body>
                <Card.Title>Mettur Dam</Card.Title>
                <Card.Text>
                  Mettur Dam, situated 30 miles from Salem in a small Mettur
                  Village, is one of the largest dams in India. Built...
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hogenakkal;
