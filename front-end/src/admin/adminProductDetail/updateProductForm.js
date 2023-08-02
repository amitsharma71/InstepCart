// StaticExample.js
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { Form, Field } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "../../Redux/action/updateProductAction";
import { allAdminProductList } from "../../Redux/action/getAllProductListing";
import { Col, Row } from "react-bootstrap";

function MydModalWithGrid(props) {
  const dispatch = useDispatch();
  const single = useSelector((state) => state.updateProductData.listdata);

  console.log(single._id, "vaikskw");
  console.log(single, "rrr");

  const handleSubmit = (values) => {
    console.log(values, "goapl");
    // dispatch(updateProduct(values));

    dispatch(updateProduct(values)).then((res) => {
      console.log(res?.meta?.requestStatus);
      if (res?.meta?.requestStatus === "fulfilled") {
        // alert("ok")
        dispatch(allAdminProductList());
      }
    });
  };
  const initialValues = {
    _id: single._id,
    description: single.description,

    category: single.category,
    title: single.title,
    price: single.price,
    images: single.images,
    brand: single.brand,
    rating: single.rating,
    subcategory: single.subcategory,
    thumbnail: single.thumbnail,
    stock: single.stock,
    discountpercentage: single.discountPercentage,
  };
  console.log(initialValues, "initialValues");

  return (
    <Modal
      size="xl"
      show={props.show}
      onHide={props.handleClose}
      aria-labelledby="contained-modal-title-vcenter"
    >
      <div className="update_product">
        <Modal.Header closeButton className="editproduct_close_button">
          <h2>Update Product</h2>
        </Modal.Header>

        <Form onSubmit={handleSubmit} initialValues={initialValues}>
          {({ handleSubmit, submitting }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <Row>
                  <Col sm={12} md={12} lg={6}>
                    <div className="left_addtoproduct">
                      <label htmlFor="category">Category</label>
                      <Field
                        className="descirption_box"
                        name="category"
                        component="select"
                        required
                      >
                        
                        <option value="1">Electronics</option>
                        <option value="2">Men</option>
                        <option value="3">Home & kitchen</option>
                        <option value="4">Appliances</option>
                        <option value="5">Sports & More</option>
                        <option value="6">Women</option>
                        {/* {categories.map((category) => (
                          <option key={category.value} value={category.value}>
                            {category.label}
                          </option>
                        ))} */}
                      </Field>
                    </div>

                    <div className="left_addtoproduct">
                      <label htmlFor="description">description</label>
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
                      <label htmlFor="title">Image</label>
                      <Field
                        className="descirption_box"
                        name="title"
                        component="input"
                        type="text"
                        placeholder="title"
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
                  </Col>
                  <Col sm={12} md={12} lg={6}>
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
                        placeholder="subcategory"
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
                    <div className="left_addtoproduct">
                      <label htmlFor="stock">Avalaible Stocks:</label>
                      <Field
                        className="descirption_box"
                        name="stock"
                        component="input"
                        type="text"
                        placeholder="avalaible stocks"
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
                        placeholder="discount percentage"
                        required
                      />
                    </div>
                    <button className="submit_button" type="submit">
                      Update Product
                    </button>
                  </Col>
                </Row>
              </div>
            </form>
          )}
        </Form>
      </div>
      <Modal.Body className="grid-example">{props.content}</Modal.Body>
    </Modal>
  );
}

export default MydModalWithGrid;
