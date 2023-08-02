import React, { useEffect, useMemo, useState } from "react";
import { Form, Field } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";
import { adminPostProduct } from "../../Redux/action/adminPostProductAction";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "../sidebar";
import { useLocation, useSearchParams, useParams } from "react-router-dom";
import { updateProduct } from "../../Redux/action/updateProductAction";
// import [useSearchParams]

const ProductForm = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  console.log(data, "abc");


  // Add product from admin

  const handleSubmit = async (values) => {
    dispatch(adminPostProduct(values));
    console.log(values, "sasasasasasasa");
  };

  const { id } = useParams();
  console.log(id, "jjjjjjjjjjjjjj");

  // useEffect((values) => {
  //   if (id) {
  //     dispatch(updateProduct(id, values));
  //   } else {
  //     dispatch(adminPostProduct(values));
  //   }
  //   console.log(id, "valuess");
  // }, []);

  // const initialValues = {
  //   description: "",
  //   category: "",
  //   title: "",
  //   price: "",
  //   images: "",
  //   brand: "",
  //   rating: "",
  //   subcategory: "",
  //   thumbnail: "",
  //   stock: "",
  //   discountpercentage: "",
  // };

  const init = () => {
    let initialValues = {};
    if (id) {
      initialValues = {};
    } else {
      initialValues = {
        title: "",
        category: "",
        subcategory: "",
        price: "",
        brand: "",
        description: "",
        images: "",
        rating: "",
        thumbnail: "",
        stock: "",
        discountpercentage: "",
      };
    }
    return initialValues;
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const initialValues = useMemo(() => init(), []);
  return (
    <>
      <h2>Add New Product</h2>
      <Form onSubmit={handleSubmit} initialValues={initialValues}>
        {({ handleSubmit, submitting }) => (
          <form onSubmit={handleSubmit}>
            <div>

              <Row>
                <Col sm={12} md={12} lg={6}>
                  <div className="left_addtoproduct">
                    <label htmlFor="category">Category:</label>
                    <Field
                      className="descirption_box"
                      name="category"
                      component="select"
                      required
                    >
                      <option>Select Category</option>
                      <option>Electronics</option>
                      <option>Men</option>
                      <option>Women</option>
                      <option>Home & Kitchen</option>
                      <option>Appliances</option>
                      <option>Sports & More</option>
                      {/* {categories.map((category) => (
                          <option key={category.value} value={category.value}>
                            {category.label}
                          </option>
                        ))} */}
                    </Field>
                  </div>


                  <div className="left_addtoproduct">
                    <label htmlFor="description">Description:</label>
                    <Field
                      className="descirption_box"
                      name="description"
                      component="input"
                      type="text"
                      placeholder="description"
                      required
                    />
                  </div>

      
                  <div className="left_addtoproduct">
                    <label htmlFor="brand">Brand Name:</label>
                    <Field
                      className="descirption_box"
                      name="brand"
                      component="input"
                      type="text"
                      placeholder="Brand Name"
                      required
                    />
                  </div>
                  <div className="left_addtoproduct">
                    <label htmlFor="rating">Rating:</label>
                    <Field
                      className="descirption_box"
                      name="rating"
                      component="input"
                      type="text"
                      placeholder="Rating:"
                      required
                    />
                  </div>
                  <div className="left_addtoproduct">
                    <label htmlFor="subcategory">subcategory:</label>
                    <Field
                      className="descirption_box"
                      name="subcategory"
                      component="input"
                      type="text"
                      placeholder="Subcategory"
                      required
                    />
                  </div>
                  <div className="left_addtoproduct">
                    <label htmlFor="thumbnail">Thumbnail:</label>
                    <Field
                      className="descirption_box"
                      name="thumbnail"
                      component="input"
                      type="text"
                      placeholder="Thumbnail"
                      required
                    />
                  </div>
                </Col>
                <Col sm={12} md={12} lg={6}>
                  <div className="left_addtoproduct">
                    <label htmlFor="stock">Avalaible Stocks:</label>
                    <Field
                      className="descirption_box"
                      name="stock"
                      component="input"
                      type="text"
                      placeholder="Avalaible stocks"
                      required
                    />
                  </div>
                  <div className="left_addtoproduct">
                    <label htmlFor="discountpercentage">
                      Discount Percentage:
                    </label>
                    <Field
                      className="descirption_box"
                      name="discountpercentage"
                      component="input"
                      type="text"
                      placeholder="Discount percentage"
                      required
                    />
                  </div>


                  <div className="left_addtoproduct">
                    <label htmlFor="title">title</label>
                    <Field
                      className="descirption_box"
                      name="title"
                      component="input"
                      type="text"
                      placeholder="Title"
                      required
                    />
                  </div>

                  <div className="left_addtoproduct">
                    <label htmlFor="price">Price</label>
                    <Field
                      className="descirption_box"
                      name="price"
                      component="input"
                      type="number"
                      step="0.01"
                      placeholder="$"
                      required
                    />
                  </div>
                  <div className="left_addtoproduct">
                    <label htmlFor="images">Image</label>
                    <Field
                      className="descirption_box"
                      name="images"
                      component="input"
                      type="text"
                      placeholder="Image"
                      required
                    />
                  </div>
                  <button className="submit_button" type="submit">
                    Add Product
                  </button>
                </Col>
              </Row>
            </div>
          </form>
        )}
      </Form>
    </>
  );
};

export default ProductForm;
