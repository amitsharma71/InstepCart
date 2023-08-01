import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Sidebar from "../sidebar";
import { useDispatch, useSelector } from "react-redux";
import { allAdminProductList } from "../../Redux/action/getAllProductListing";
import { AiFillCreditCard } from "react-icons/ai";
import { RiDeleteBinFill } from "react-icons/ri";
import { deleteProduct } from "../../Redux/action/deleteProductAction";
import { updateProduct } from "../../Redux/action/updateProductAction";
import StaticExample from "./updateProductForm";
import MydModalWithGrid from "./updateProductForm";

function AllProductListing() {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const data = useSelector(
    (state) => state?.GetAdminProductAllListData?.listdata
  );
  console.log(data, "adminlist");

  // listing data for admin..

  useEffect(() => {
    dispatch(allAdminProductList());
  }, []);
  const deleteClick = (_id) => {
    dispatch(deleteProduct({ _id: _id })).then((res) => {
      console.log(res?.meta?.requestStatus);
      if (res?.meta?.requestStatus === "fulfilled") {
        // alert("ok")
        dispatch(allAdminProductList());
      }
    });
  };
  const editClick = (_id, values) => {
    dispatch(updateProduct({ _id: _id }));
    setShow(true);
    console.log("wwww");
  };
  const handleClose = () => setShow(false);
  return (
    <>
      <div>
        <h2>All Products</h2>
        <Table striped bordered hover variant="light">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Category</th>
              <th>Sub Category</th>
              <th>Price</th>
              <th>Brand</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data?.map((product, index) => {
                return (
                  <>
                    <tr key={index}>
                      <td></td>
                      <td>{product.title}</td>
                      <td>{product.category}</td>
                      <td>{product.subcategory}</td>
                      <td>{product.price}</td>
                      <td>{product.brand}</td>
                      <td>
                        <AiFillCreditCard
                          onClick={() => editClick(product._id)}
                        />

                        <RiDeleteBinFill
                          onClick={() => deleteClick(product._id)}
                        />
                      </td>
                    </tr>
                  </>
                );
              })}
          </tbody>
        </Table>
        <MydModalWithGrid show={show} handleClose={handleClose} />
      </div>
    </>
  );
}

export default AllProductListing;
