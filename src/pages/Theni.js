import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Theni = () => {
  return (
    <div id="theni">
      <br />
      <Container>
        <h3>09.Theni</h3>
        {/* single card */}

        <div className="card mb-3 border-0">
          <div className="row g-0">
            <div className="col-md-4 d-flex align-items-center">
              <img
                src={require('../assets/banner/Theni.jpeg')}
                className="img-fluid rounded-start"
                alt="Chennai"
                style={{ maxWidth: 'auto', height: 'auto' }}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">"A little hamlet in Tamil Nadu"</h5>
                <p className="card-text">
                  &nbsp;&nbsp;&nbsp;&nbsp;Theni Tourism Dotted by luscious
                  patches of greenery and beautiful waterfalls, Theni is a
                  little hamlet on the Western Ghats. The topography of Theni
                  mainly consists of hills and ranges. It has plenty of rivers
                  and dams and is an abode to 27 forests hence filled with
                  unparalleled greenery.
                </p>
                <p className="card-text">
                  &nbsp;&nbsp;&nbsp;&nbsp;There temples like Kamatchi Amman
                  Temple, Vellappar Temple, and Balasubramanya Temple which are
                  brimming with devotees from all around the country throughout
                  the year. The vibrant local markets of Theni are shoppers'
                  paradise. The local handloom products and agricultural
                  products are the best buys at these markets. The aroma filled
                  tea estates in Theni are a paradise. The Kolukkamalai Tea
                  estate is often deemed to be the world's highest organic tea
                  estate. The Suruli Falls and the Kumbakarai Falls are the
                  crown jewels of Theni.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <br />
      <h3 className="text-center">Must Visit Place In Theni</h3>
      <br />
      {/* responsive card */}
      <div className="container">
        <div className="row row-cols-auto">
          <div className="col  d-flex align-items-stretch">
            <Card style={{ width: '18rem' }}>
              <Card.Img
                variant="top"
                src={require('../assets/banner/theni1.(1).jpeg')}
              />
              <Card.Body>
                <Card.Title>Chinna Suruli Falls</Card.Title>
                <Card.Text>
                  Located in the lap of wild, green forests, Chinna Suruli Falls
                  is a picturesque destination to visit from Theni...
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </div>
          <div class="col  d-flex align-items-stretch">
            <Card style={{ width: '18rem' }}>
              <Card.Img
                variant="top"
                src={require('../assets/banner/theni1 (2).jpeg')}
              />
              <Card.Body>
                <Card.Title>Kumbakkarai Falls </Card.Title>
                <Card.Text>
                  Located in Dindigul district near Theni in Tamil Nadu,
                  Kumbakkarai Falls is a mesmerising waterfall that...
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </div>
          <div class="col  d-flex align-items-stretch">
            <Card style={{ width: '18rem' }}>
              <Card.Img
                variant="top"
                src={require('../assets/banner/theni1.(3).jpeg')}
              />
              <Card.Body>
                <Card.Title>Meghamalai</Card.Title>
                <Card.Text>
                  Tucked within the Western Ghats of Tamil Nadu, Meghamalai in
                  Theni district is the kind of hidden paradise...
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
                src={require('../assets/banner/theni1.(4).jpeg')}
              />
              <Card.Body>
                <Card.Title>Suruli Falls</Card.Title>
                <Card.Text>
                  Suruli Falls is a beautiful waterfall in the Theni district of
                  Tamil Nadu and one of the major tourist attractions of...
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

export default Theni;
