import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Card, Row } from "react-bootstrap";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  const [apiData, setApiData] = useState();
  const [category, setCategory] = useState();
  const dispatch = useDispatch();
  // const data = useSelector((state) => state?.register?.listdata);
  // console.log(data, "aaaaaabbbbbbbbb");

  useEffect(() => {
    // dispatch(signUpAction());

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

  const imgClick = () => {
    navigate("/productdetail");
  };
  return (
    <div>
      {category &&
        category?.map((e) => {
          return (
            <div className="mb-3" key={e}>
              <label className="form-lable">{e}</label>
              <input
                type="checkbox"
                value={e}
                onChange={(e) =>
                  handelChange(e?.target?.checked, e.target.value)
                }
              />
            </div>
          );
        })}
      <Row>
        {apiData &&
          apiData?.map((e) => {
            return (
              <>
                <Card style={{ width: "18rem" }}>
                  <h3>{e.category}</h3>
                  <Card.Img onClick={imgClick} variant="top" src={e.image} />

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
          })}
      </Row>
    </div>
  );
};

export default Home;
