import React, { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Sidebar from "../sidebar";
import { useDispatch, useSelector } from "react-redux";
import { allAdminProductList } from "../../Redux/action/getAllProductListing";
import { AiFillCreditCard } from "react-icons/ai";
import { RiDeleteBinFill } from "react-icons/ri";

function AllProductListing() {
  const dispatch = useDispatch();
  const data = useSelector(
    (state) => state?.GetAdminProductAllListData?.listdata
  );
  console.log(data, "adminlist");

  // listing data for admin..

  useEffect(() => {
    dispatch(allAdminProductList());
  }, []);
  const deleteClick = () => {};
  const editClick = () => {};
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
              <th>Brand</th>
              <th>Price</th>
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
                      <td>{product.brand}</td>
                      <td>{product.price}</td>

                      <td>
                        <AiFillCreditCard onClick={deleteClick} />
                        <RiDeleteBinFill onClick={editClick} />
                      </td>
                    </tr>
                  </>
                );
              })}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default AllProductListing;
