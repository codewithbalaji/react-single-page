import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Kumbakonam = () => {
  return (
    <div id="kumbakonam">
      <br />
      <Container>
        <h3>06.Kumbakonam</h3>
        {/* single card */}

        <div className="card mb-3 border-0">
          <div className="row g-0">
            <div className="col-md-4 d-flex align-items-center">
              <img
                src={require('../assets/banner/Kumbakonam.jpeg')}
                className="img-fluid rounded-start"
                alt="Chennai"
                style={{ maxWidth: 'auto', height: 'auto' }}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">"The Cambridge of India"</h5>
                <p className="card-text">
                  &nbsp;&nbsp;&nbsp;&nbsp;Kumbakonam Tourism Sandwiched between
                  two great rivers of southern India, Cauvery and Arsala,
                  Kumbakonam is a gorgeous temple town in the heart of the
                  Thanjavur district of Tamil Nadu. The town is a place for the
                  lovers of history and those seeking to understand India's
                  cultural roots and Hinduism.
                </p>
                <p className="card-text">
                  &nbsp;&nbsp;&nbsp;&nbsp;The town is also known for its grand
                  festival called Mahamaham festival which is celebrated every
                  twelve years at the Mahamaham Tank. The town is one of the
                  oldest in Indian history, and known for its famed temples,
                  Chola heritage and also for its marvelous educational
                  institutes. The town is one of the oldest in Indian history,
                  and known for its famed temples, Chola heritage and also for
                  its marvelous educational institutes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <br />
      <h3 className="text-center">Must Visit Place In Kumbakonam</h3>
      <br />
      {/* responsive card */}
      <div className="container">
        <div className="row row-cols-auto">
          <div className="col  d-flex align-items-stretch">
            <Card style={{ width: '18rem' }}>
              <Card.Img
                variant="top"
                src={require('../assets/banner/kumbakonam1 (1).jpeg')}
              />
              <Card.Body>
                <Card.Title>Sarangapani Temple</Card.Title>
                <Card.Text>
                  Sarangapani Temple, an ancient temple dedicated to Lord
                  Vishnu, is located in the town of Kumbakonam...
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </div>
          <div class="col  d-flex align-items-stretch">
            <Card style={{ width: '18rem' }}>
              <Card.Img
                variant="top"
                src={require('../assets/banner/kumbakonam1 (2).jpeg')}
              />
              <Card.Body>
                <Card.Title>Nageswaran Temple</Card.Title>
                <Card.Text>
                  Constructed as a chariot, the Nageswaran temple is an
                  important Shaivite temple. A piece of genius Chola...
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </div>
          <div class="col  d-flex align-items-stretch">
            <Card style={{ width: '18rem' }}>
              <Card.Img
                variant="top"
                src={require('../assets/banner/Kumbakonam(3).jpeg')}
              />
              <Card.Body>
                <Card.Title>Adi Kumbeshwara Temple</Card.Title>
                <Card.Text>
                  Located in the town of Darasuram near Kumbakonam in Tamil
                  Nadu, Airavatesvara...
                </Card.Text>
                <br />
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
                src={require('../assets/banner/kumbakonam1 (4).jpeg')}
              />
              <Card.Body>
                <Card.Title>Airavatesvara Temple</Card.Title>
                <Card.Text>
                  Located in the town of Darasuram near Kumbakonam in Tamil
                  Nadu, Airavatesvara Temple is a revered...
                </Card.Text>
                <br />
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

export default Kumbakonam;
