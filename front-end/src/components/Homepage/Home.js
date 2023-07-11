import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUpAction } from "../../Redux/action/signUpAction";
import { Button, Card, Row } from "react-bootstrap";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state?.register?.listdata);
  console.log(data, "aaaaaabbbbbbbbb");
  useEffect(() => {
    dispatch(signUpAction());
  }, []);

  const handleClick = () => {
    navigate("/addcart");
  };
  return (
    <div>
      <Row>
        {data &&
          data?.map((e) => {
            return (
              <>
                <Card style={{ width: "18rem" }}>
                  <h3>{e.category}</h3>
                  <Card.Img variant="top" src={e.image} />
                  <Card.Body>
                    <Card.Title>{e.title}</Card.Title>
                    <Card.Text>{e.description}</Card.Text>
                    <p>price {e.price}</p>
                    <p>count: {e.rating.count}</p>
                    <p>Rating: {e.rating.rate}</p>
                    <Button variant="primary" onClick={handleClick}>
                      Go somewhere
                    </Button>
                  </Card.Body>
                </Card>
              </>
            );
          })}
      </Row>
    </div>
  );
};

export default Home;
