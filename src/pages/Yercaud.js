import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Yercaud = () => {
  return (
    <div id="yercaud">
      <Container>
        <br />
        <h3>08.Yercaud</h3>
        {/* single card */}

        <div className="card mb-3 border-0">
          <div className="row g-0">
            <div className="col-md-4 d-flex align-items-center">
              <img
                src={require('../assets/banner/Yarcaud.jpeg')}
                className="img-fluid rounded-start"
                alt="Chennai"
                style={{ maxWidth: 'auto', height: 'auto' }}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">"The Land of Seven Forests."</h5>
                <p className="card-text">
                  &nbsp;&nbsp;&nbsp;&nbsp;Yercaud Tourism Nestled in the
                  Shivaroy Hills of Tamil Nadu, Yercaud is a hill station in the
                  Eastern Ghats steeped in abundant greenery. Commonly called
                  'Ooty of the Poor', this region has a history dating back to
                  the time of the British. Located at an altitude of 4970 feet,
                  Yercaud is known for its vast expanses of coffee plantations
                  and great weather.
                </p>
                <p className="card-text">
                  &nbsp;&nbsp;&nbsp;&nbsp;Yercaud lake is the main point of
                  attraction of the region.One of the many highlights is the
                  summer festival that takes place in May. It is dedicated to
                  Lord Servarayan, the supreme god of the ranges and gives
                  visitors a glimpse into the rich heritage of this region.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <br />
      <h3 className="text-center">Must Visit Place In Yercaud</h3>
      <br />
      {/* responsive card */}
      <div className="container">
        <div className="row row-cols-auto">
          <div className="col  d-flex align-items-stretch">
            <Card style={{ width: '18rem' }}>
              <Card.Img
                variant="top"
                src={require('../assets/banner/yercaud...(1).jpeg')}
              />
              <Card.Body>
                <Card.Title>Pagoda Point</Card.Title>
                <Card.Text>
                  Located in the eastern part of the Yercaud Hills, Pagoda point
                  is a beautiful viewpoint where one is treated ...
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
                src={require('../assets/banner/yercaud1 (2).jpeg')}
              />
              <Card.Body>
                <Card.Title>Botanical Garden</Card.Title>
                <Card.Text>
                  Any tourist who is interested in gods gift to this planet, the
                  wondrous flora, and in knowing about various...
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
                src={require('../assets/banner/yercaud1.(3).jpeg')}
              />
              <Card.Body>
                <Card.Title>Emerald Lake</Card.Title>
                <Card.Text>
                  The most alluring aspect of Yercaud is its big yet natural
                  lake very popularly known as the Emerald Lake...
                </Card.Text>
                <br />
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </div>
          <div class="col  d-flex align-items-stretch">
            {' '}
            <Card style={{ width: '18rem' }}>
              <Card.Img
                variant="top"
                src={require('../assets/banner/yercaud1 (4).jpeg')}
              />
              <Card.Body>
                <Card.Title>Lady's Seat</Card.Title>
                <Card.Text>
                  Lady's Seat is a viewpoint that overlooks the winding ghat
                  road and offers a spectacular view of Mettur Dam... Read More
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

export default Yercaud;
