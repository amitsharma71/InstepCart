import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { signUpAction } from "../../Redux/action/signUpAction";
import { Card, Row, Col, Badge } from "react-bootstrap";

import { useNavigate } from "react-router";
import { Carousel } from "react-bootstrap";
// import { productDetails } from "../../Redux/action/registerAction";

const cardData = [
  {
    cardImg: "image/pexels-pixabay-267320 (1).jpg",
    cardName: "Footwear",
    cardPara: "Upto 70% off",
  },
  {
    cardImg: "image/pexels-terje-sollie-298863.jpg",
    cardName: "clothing",
    cardPara: "Upto 70% off",
  },
  {
    cardImg: "image/pexels-godisable-jacob-934673.jpg",
    cardName: "Bags ",
    cardPara: "Upto 80% off",
  },
  {
    cardImg: "image/pexels-torsten-dettlaff-437038 (1).jpg",
    cardName: "Watches",
    cardPara: "Upto 40% off",
  },
];

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

    fetch(`https://fakestoreapi.com/products/categories`)
      .then((res) => res.json())
      .then((data) => setCategory(data));

    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((data) => setApiData(data));
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
          <Col md={9}>
            <div className="slider">
              <Carousel className="">
                <Carousel.Item interval={1000}>
                  <img
                    className="slide_img"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/PD23/ACQ/hero/v2/PC_Hero_3000x1200_2X_EN._CB600991698_.jpg "
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                  <img
                    className="slide_img"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/junatf23/unrecapay/MA_3000._CB603210873_.jpg"
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                    <h3>Style for men</h3>
                    <p>get 18% off*</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="slide_img"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Shreyansh/BAU/Unrexc/D70978891_INWLD_BAU_Unrec_Uber_PC_Hero_3000x1200._CB594707876_.jpg"
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </Col>
          <Col md={3}>
            <div className="right_col">
              <Row xs={1} md={2} className="g-4">
                {cardData?.map((item, index) => (
                  <Col key={index}>
                    <Card>
                      <Card.Img variant="top" src={item?.cardImg} alt="" />
                      <Card.Body>
                        <Card.Title>{item?.cardName}</Card.Title>
                        <p className="right_col_detail">{item?.cardPara}</p>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
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
          {/* <Col lg={3}></Col> */}
        </Row>
      </div>
    </div>
  );
};

export default Home;
