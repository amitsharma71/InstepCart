import React, { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Sidebar from "../sidebar";
import { useDispatch, useSelector } from "react-redux";
import { allAdminProductList } from "../../Redux/action/getAllProductListing";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinFill } from "react-icons/ri";

function AllProductListing() {
  const dispatch = useDispatch();
  const data = useSelector(
    (state) => state?.GetAdminProductAllListData?.listdata
  );
  // console.log(data, "adminlist");

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
        <Table responsive striped bordered hover variant="light">
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
                      <td className="index_category">{product.title}</td>
                      <td className="index_category">{product.category}</td>
                      <td className="index_category">{product.subcategory}</td>
                      <td className="index_category"> {product.price}</td>
                      <td className="index_category">{product.brand}</td>
                      <td className="d-flex icon_div">
                        <FiEdit className="product_icon" onClick={deleteClick} />
                        <RiDeleteBinFill className="product_icon" onClick={editClick} />
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
