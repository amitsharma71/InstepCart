import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

function Dashboard({ percentage }) {
  const data = [
    { name: "Jan", uv: 400, pv: 2400, amt: 2400 },
    { name: "Feb", uv: 300, pv: 1398, amt: 2210 },
    { name: "Mar", uv: 200, pv: 9800, amt: 2290 },
    { name: "Apr", uv: 278, pv: 3908, amt: 2000 },
    { name: "May", uv: 189, pv: 4800, amt: 2181 },
    { name: "Jun", uv: 239, pv: 3800, amt: 2500 },
    { name: "Jul", uv: 349, pv: 4300, amt: 2100 },
    { name: "Aug", uv: 300, pv: 1398, amt: 2210 },
    { name: "Sep", uv: 500, pv: 9800, amt: 2290 },
    { name: "Oct", uv: 378, pv: 3908, amt: 2000 },
    { name: "Nov", uv: 289, pv: 4800, amt: 2181 },
    { name: "Dec", uv: 409, pv: 3800, amt: 2500 },
  ];
  return (
    <Container>
      <Row>
        <Row>
          <Col>
            {" "}
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">EARNINGS (MONTHLY)</h5>
                <p className="card-text">$40,000</p>
              </div>
            </div>
          </Col>
          <Col>
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">EARNINGS (ANNUAL)</h5>
                <p className="card-text">$215,000</p>
              </div>
            </div>
          </Col>
          <Col>
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">TASKS</h5>
                <p className="card-text">
                  50%
                  <div class="progress">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style={{ width: "50%" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </p>
              </div>
            </div>
          </Col>
          <Col>
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">PENDING REQUESTS</h5>
                <p className="card-text">18</p>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={8}>
            <LineChart width={600} height={300} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="uv" stroke="#8884d8" />
              <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
            </LineChart>
          </Col>
          <Col sm={4}>
            <Card style={{ width: "20rem", height: "250px" }}>
              <Card.Body>
                <div style={{ width: 200, height: 200 }}>
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                    styles={buildStyles({
                      pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
                      textColor: "#3e98c7",
                      trailColor: "#d6d6d6",
                      backgroundColor: "#3e98c7",
                    })}
                  />
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card style={{ width: "30rem" }}>
              <Card.Body>
                <h6>Server Migration</h6>
                <div className="progress">
                  {" "}
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: "20%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <h6>Sales Tracking</h6>
                <div className="progress">
                  <div
                    className="progress-bar bg-info"
                    role="progressbar"
                    style={{ width: "40%" }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <h6>Customer Database</h6>
                <div className="progress">
                  <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    style={{ width: "60%" }}
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <h6>Payout Details</h6>
                <div className="progress">
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "80%" }}
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <h6>Account Setup</h6>
                <div className="progress">
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "100%" }}
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            {" "}
            <Card style={{ width: " 25rem" }}>
              <Card.Img
                variant="top"
                src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_posting_photo.svg"
              />
              <Card.Body>
                <Card.Text>
                  Add some quality, svg illustrations to your project courtesy
                  of unDraw, a constantly updated collection of beautiful svg
                  images that you can use completely free and without
                  attribution!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row>
              {[
                "Primary",
                "Secondary",
                "Success",
                "Danger",
                "Warning",
                "Info",
                "Light",
                "Dark",
              ].map((variant) => (
                <Col sm={6}>
                  <Card
                    bg={variant.toLowerCase()}
                    key={variant}
                    text={variant.toLowerCase() === "light" ? "dark" : "white"}
                    style={{ width: "15rem" }}
                    className="mb-2"
                  >
                    <Card.Body>
                      <Card.Title>{variant} </Card.Title>
                      <Card.Text>#4e73df</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>{" "}
          <Col>
            {" "}
            <Card style={{ width: "25rem", height: "300px" }}>
              <Card.Header>Development Approach</Card.Header>
              <Card.Body>
                <Card.Text>
                  SB Admin 2 makes extensive use of Bootstrap 4 utility classes
                  in order to reduce CSS bloat and poor page performance. Custom
                  CSS classes are used to create custom components and custom
                  utility classes. Before working with this theme, you should
                  become familiar with the Bootstrap framework, especially the
                  utility classes.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}

export default Dashboard;
