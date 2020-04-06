import React from "react";
import "../Components/Card.css";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody,
} from "reactstrap";

import Top1 from "../Padel-app-Assets/Top1.png";
import Top2 from "../Padel-app-Assets/Top2.png";
import Top3 from "../Padel-app-Assets/Top3.png";

const Card_home = (props) => {
  return (
    <CardDeck>
      <Card>
        <CardImg top width="100%" src={Top1} alt="Card image cap" />
        <CardBody>
          <CardTitle>Midnight Blue Top</CardTitle>
          <CardSubtitle>$40.00</CardSubtitle>
          <CardText>
            High-quality fabrics, stunning design, affordable price.
          </CardText>
          <Button>Buy</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={Top3} alt="Card image cap" />
        <CardBody>
          <CardTitle>Cornflower Blue Top</CardTitle>
          <CardSubtitle>$40.00</CardSubtitle>
          <CardText>
            High-quality fabrics, stunning design, affordable price.
          </CardText>
          <Button>Add to Cart</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={Top2} alt="Card image cap" />
        <CardBody>
          <CardTitle>Khakhi Relaxed Fit</CardTitle>
          <CardSubtitle>$41.00</CardSubtitle>
          <CardText>
            High-quality fabrics, stunning design, affordable price.
          </CardText>
          <Button>Buy Now</Button>
        </CardBody>
      </Card>
    </CardDeck>
  );
};

export default Card_home;
