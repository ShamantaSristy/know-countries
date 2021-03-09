import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./Country.css";

const Country = (props) => {
    const {name, capital, region, flag, alpha2Code} = props.country;
    return (
        <Card className="card" style={{ width: '18rem' }}>
        <Card.Img className="img" variant="top" src={flag} />
        <Card.Body>
          <Card.Title>Name: {name}</Card.Title>
          <Card.Text>
            <h5>Capital: {capital}</h5>
            <p>Region: {region}</p>
            <small>AlphaCode: {alpha2Code}</small>
          </Card.Text>

          <Link to={`/country/${alpha2Code}`}>Know More</Link>
          <br/>
          <p>Or</p>
          <Button>Click Here</Button>
        </Card.Body>
      </Card>
    );
};

export default Country;