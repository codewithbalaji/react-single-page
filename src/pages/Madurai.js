import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Madurai = () => {
  return (
    <div id="madurai">
      <br />
      <Container>
        <h3>07.Madurai</h3>
        {/* single card */}

        <div className="card mb-3 border-0">
          <div className="row g-0">
            <div className="col-md-4 d-flex align-items-center">
              <img
                src={require('../assets/banner/Madurai.jpeg')}
                className="img-fluid rounded-start"
                alt="Chennai"
                style={{ maxWidth: 'auto', height: 'auto' }}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">"The Lotus City"</h5>
                <p className="card-text">
                  &nbsp;&nbsp;&nbsp;&nbsp;Madurai Tourism Madurai, the cultural
                  capital of Tamil Nadu, is one of the oldest continuously
                  inhabited cities of India. Ruled by Pandya kings for the
                  longest time in its history, it is called as the 'Lotus City'
                  as it was planned and built in the shape of a lotus. Madurai
                  is known for Meenakshi Amman Temple, dedicated to the goddess
                  Meenakshi with a sanctum for her consort, Sundareshwarar.
                </p>
                <p className="card-text">
                  &nbsp;&nbsp;&nbsp;&nbsp;There are many other ancient temples
                  in Madurai, including Thiruparankundram. It is one of the
                  important old temples dedicated to Lord Muruga(Karthikeya) and
                  is located on a hillock approximately 8 km from the city.
                  Having trade ties with ancient Rome, the place holds a great
                  cultural heritage. With bustling bazaars and fantastic street
                  food, Madurai has heritage walks conducted throughout the day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <br />
      <h3 className="text-center">Must Visit Place In Madurai</h3>
      <br />
      {/* responsive card */}
      <div className="container">
        <div className="row row-cols-auto">
          <div className="col  d-flex align-items-stretch">
            <Card style={{ width: '18rem' }}>
              <Card.Img
                variant="top"
                src={require('../assets/banner/madurai1..jpeg')}
              />
              <Card.Body>
                <Card.Title>Vaigai Dam</Card.Title>
                <Card.Text>
                  Vaigai Dam, a magnificent human-made structure, is constructed
                  over River Vaigai near Andipatti, Then....
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
                src={require('../assets/banner/madurai2.jpeg')}
              />
              <Card.Body>
                <Card.Title>Meghamalai</Card.Title>
                <Card.Text>
                  Often known as the "High Wavy Mountains", Meghamalai is a
                  petit yet beautiful place located in the...
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
                src={require('../assets/banner/madurai3..jpeg')}
              />
              <Card.Body>
                <Card.Title>Samanar Hills</Card.Title>
                <Card.Text>
                  Located in Keelakuyilkudi village near Madurai, Samanar Hills
                  or Samanar Malai is a beautiful hill rock...
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
                src={require('../assets/banner/madurai4..jpeg')}
              />
              <Card.Body>
                <Card.Title>Thirumalai Nayakar</Card.Title>
                <Card.Text>
                  Thirumalai Nayakar Palace was erected in 1636 AD in the city
                  of Madurai, by King Thirumalai Nayak...
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

export default Madurai;
