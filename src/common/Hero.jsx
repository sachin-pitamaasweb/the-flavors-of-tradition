import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

import '../style/Hero.css';

const Hero = ({ imageUrl, altText, title }) => {
  return (
    <section className='hero'>
      <Container fluid>
        <Row className='justify-content-center align-items-center'>
          <Col xs={12} sm={6} className='text-center'>
            <div className='hero-image'>
              <Image src={imageUrl} alt={altText} fluid className='img-group' />
            </div>
          </Col>
        </Row>
          <h1 className='h1-title'>{title}</h1>
      </Container>
    </section>
  );
};

export default Hero;
