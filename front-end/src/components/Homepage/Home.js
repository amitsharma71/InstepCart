import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUpAction } from "../../Redux/action/signUpAction";
import { Card, Row, Col, Badge } from "react-bootstrap";

import { useNavigate } from "react-router";
import { Carousel } from "react-bootstrap";
import {
  BsFillBagFill,
  BsFillGiftFill,
  BsQuestionCircleFill,
  BsStarHalf,
} from "react-icons/bs";

// import { productDetails } from "../../Redux/action/registerAction";

// const cardData = [
//   {
//     cardImg: "image/pexels-pixabay-267320 (1).jpg",
//     cardName: "Footwear",
//     cardPara: "Upto 70% off",
//   },
//   {
//     cardImg: "image/pexels-terje-sollie-298863.jpg",
//     cardName: "clothing",
//     cardPara: "Upto 70% off",
//   },
//   {
//     cardImg: "image/pexels-godisable-jacob-934673.jpg",
//     cardName: "Bags ",
//     cardPara: "Upto 80% off",
//   },
//   {
//     cardImg: "image/pexels-torsten-dettlaff-437038 (1).jpg",
//     cardName: "Watches",
//     cardPara: "Upto 40% off",
//   },
// ];

const Home = () => {
  const navigate = useNavigate();
  const [apiData, setApiData] = useState();
  const [category, setCategory] = useState();
  const dispatch = useDispatch();
  const data = useSelector((state) => state?.register?.listdata);
  const datwa = useSelector((state) => state?.product?.listdata.data);
  console.log(datwa, "aaaaaabbbbbbbbbss");

  useEffect(() => {
    // dispatch(signUpAction());
    // dispatch(productDetails());
    // fetch(`https://fakestoreapi.com/products/categories`)
    //   .then((res) => res.json())
    //   .then((data) => setCategory(data));
    // fetch(`https://fakestoreapi.com/products`)
    //   .then((res) => res.json())
    //   .then((data) => setApiData(data));
  }, []);

  const handelChange = (e, value) => {
    console.log(e, "fghjkjhghjklkjhghjk");
    if (e === true) {
      fetch(`https://fakestoreapi.com/products/category/${value}`)
        .then((res) => res.json())
        .then((data) => setApiData(data));
    }
  };

  console.log(category, "json");
  const handleClick = () => {
    navigate("/addcart");
  };

  return (
    <div>
      <div className="container-fluid  slider_col">
        <Row>
          <Col md={12}>
            <div className="slider">
              <Carousel className="">
                <Carousel.Item interval={1000}>
                  <img
                    className="slide_img"
                    src=" https://itechbahrain.com/wp-content/uploads/2020/05/eletro.jpg"
                    alt="First slide"
                  />
                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                  <img
                    className="slide_img"
                    src="https://www.axelaccessories.com/media/homepage/2023/Sliders/03_SALE_NEW_40_-_TOP_SLIDER_-_1920X700_SS23.jpg"
                    alt="Second slide"
                  />
                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="slide_img"
                    src="https://clotya.co.uk/wp-content/uploads/2023/02/Banner-1-1.jpg"
                    alt="Third slide"
                  />
                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <Row>
              {/* {apiData &&
              apiData?.map((e) => {
                return (
                  <>
                    <Card style={{ width: "18rem" }}>
                      <h3>{e.category}</h3>
                      <Card.Img
                        onClick={imgClick}
                        variant="top"
                        src={e.image}
                      />

                      <Card.Body>
                        <Card.Title>{e.title}</Card.Title>
                        <Card.Text>{e.description}</Card.Text>
                        <p>price {e.price}</p>
                        <p>count: {e.rating.count}</p>
                        <p>Rating: {e.rating.rate}</p>
                        <Button variant="primary" onClick={handleClick}>
                          Add To Cart
                        </Button>
                        <Button variant="primary">Buy Now</Button>
                      </Card.Body>
                    </Card>
                  </>
                );
              })} */}
              {data &&
                data?.map((e) => {
                  return (
                    <>
                      <Col md={2}>
                        <Card className="shopping_card">
                          {/* <h3>{e.category}</h3> */}
                          <div className="img_div">
                            <Card.Img variant="top" src={e.image} />
                          </div>
                          <Card.Body>
                            <div className="item_rating">
                              <p>
                                {" "}
                                <Badge className="badge" bg="danger">
                                  {e.rating.rate}
                                </Badge>
                              </p>
                              <p>
                                {" "}
                                <Badge className="badge" bg="primary">
                                  {e.category}
                                </Badge>
                              </p>
                            </div>
                            <Card.Title className="crad_text">
                              {e.title}
                            </Card.Title>
                            <Card.Text className="crad_text">
                              {e.description}
                            </Card.Text>
                            <p>Price {e.price}</p>
                          </Card.Body>
                        </Card>
                      </Col>
                    </>
                  );
                })}
            </Row>
          </Col>
          <Col lg={3}></Col>
        </Row>
       
      </div>
    </div>
  );
};

export default Home;
