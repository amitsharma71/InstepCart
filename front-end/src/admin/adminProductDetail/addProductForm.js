import React, { useEffect, useMemo } from "react";
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

  console.log(data, "");

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
        description: "",
        category: "",
        title: "",
        price: "",
        images: "",
        brand: "",
        rating: "",
        subcategory: "",
        thumbnail: "",
        stock: "",
        discountpercentage: "",
      };
    }
    return initialValues;
  };

  const initialValues = useMemo(() => init(), []);
  return (
    <>
      <h2>Add New Product</h2>
      <Form onSubmit={handleSubmit} initialValues={initialValues}>
        {({ handleSubmit, submitting }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="category">Category</label>
              <Field name="category" component="select" required>
                <option value="1">Electronics</option>
                <option value="2">Men</option>
                <option value="3">Home & kitchen</option>
                <option value="3">Appliances</option>
                <option value="3">Sports & More</option>
                <option value="3">Women</option>
                {/* {categories.map((category) => (
                          <option key={category.value} value={category.value}>
                            {category.label}
                          </option>
                        ))} */}
              </Field>
            </div>

            <div>
              <label htmlFor="description">description</label>
              <Field
                name="description"
                component="input"
                type="text"
                placeholder="description"
                required
              />
            </div>

            <div>
              <label htmlFor="title">Image</label>
              <Field
                name="title"
                component="input"
                type="text"
                placeholder="title"
                required
              />
            </div>

            <div>
              <label htmlFor="price">Price</label>
              <Field
                name="price"
                component="input"
                type="number"
                step="0.01"
                placeholder="$"
                required
              />
            </div>
            <div>
              <label htmlFor="images">Image</label>
              <Field
                name="images"
                component="input"
                type="text"
                placeholder="Image"
                required
              />
            </div>
            <div>
              <label htmlFor="brand">Brand Name:</label>
              <Field
                name="brand"
                component="input"
                type="text"
                placeholder="Brand Name"
                required
              />
            </div>
            <div>
              <label htmlFor="rating">Rating:</label>
              <Field
                name="rating"
                component="input"
                type="text"
                placeholder="Rating:"
                required
              />
            </div>
            <div>
              <label htmlFor="subcategory">subcategory:</label>
              <Field
                name="subcategory"
                component="input"
                type="text"
                placeholder="subcategory"
                required
              />
            </div>
            <div>
              <label htmlFor="thumbnail">Thumbnail:</label>
              <Field
                name="thumbnail"
                component="input"
                type="text"
                placeholder="Thumbnail"
                required
              />
            </div>
            <div>
              <label htmlFor="stock">Avalaible Stocks:</label>
              <Field
                name="stock"
                component="input"
                type="text"
                placeholder="avalaible stocks"
                required
              />
            </div>
            <div>
              <label htmlFor="discountpercentage">Discount Percentage:</label>
              <Field
                name="discountpercentage"
                component="input"
                type="text"
                placeholder="discount percentage"
                required
              />
            </div>

            <button type="submit">Add Product</button>
          </form>
        )}
      </Form>
    </>
  );
};

export default ProductForm;
