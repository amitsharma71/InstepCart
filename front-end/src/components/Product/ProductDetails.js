import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addcartapi } from "../../Redux/action/extraAction";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [items, setItems] = useState([]);

  const details = useSelector((state) => state.slicedetails.listdata);
  console.log(details, "detailssss");

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(details));
  }, [details]);

  useEffect(() => {
    dispatch(addcartapi(id));
  }, [id]);

  const [pinCode, setPincode] = useState("");
  const handlePinCodeChange = (e) => {
    setPincode(e.target.value);
  };

  const handleCheckDelivery = () => {
    console.log("Checking delivery for pin code:", pinCode);
  };
  const handleBuyNow = () => {
    console.log("Buy Now");
  };

  return (
    <>
      <div>
        {details && (
          <Row>
            <Col>
              <div className="d-flex justify-content-center">
                <Card style={{ width: "18rem" }}>
                  {details.image && (
                    <Card.Img variant="top" src={details.image} />
                  )}
                  <Card.Body>
                    {details.title && <Card.Title>{details.title}</Card.Title>}

                    {details.price && <Card.Title>{details.price}</Card.Title>}

                    {details.category && (
                      <Card.Title>{details.category}</Card.Title>
                    )}
                    {details.rating && (
                      <>
                        <Card.Title>Rating: {details.rating.rate}</Card.Title>
                        <Card.Title>Count: {details.rating.count}</Card.Title>
                      </>
                    )}
                  </Card.Body>
                </Card>
              </div>
            </Col>

            <Card
              style={{ width: "18rem" }}
              className="d-flex justify-content-center"
            >
              <Col>
                {details.description && (
                  <Card.Text>{details.description}</Card.Text>
                )}
                <Button variant="primary">Add to Cart</Button>
                <Button variant="success" onClick={handleBuyNow}>
                  Buy Now
                </Button>
                <div>
                  <input
                    type="text"
                    value={pinCode}
                    onChange={handlePinCodeChange}
                    placeholder="Enter Pin Code"
                  />
                  <Button
                    variant="outline-secondary"
                    onClick={handleCheckDelivery}
                  >
                    Check Delivery
                  </Button>
                </div>{" "}
              </Col>
            </Card>
          </Row>
        )}
      </div>
    </>
  );
}
