import React, { useState } from "react";
import CommonTable from "../../Common/Table/Table";
import { initialProducts } from "../../Common/Data/Data";
import CommonButton from "../../Common/Button/Button";
import "./Product.css";
import Addproduct from "../../Common/AddProduct/Addproduct";
import CommonPara from "../../Common/Para/Para";
import { BiCartAdd } from "react-icons/bi";

const Product = () => {
  const [Addform, setAddform] = useState(false);

  const columns = [
    { header: "Id", datakey: "id" },
    { header: "Product Name", datakey: "name" },
    { header: "Category", datakey: "category" },
    { header: "Price", datakey: "price" },
    { header: "Stock Quantity", datakey: "stockQuantity" },
  ];

  const handleclick = () => {
    setAddform(true);
  };

  const handlesave = (data) => {
    initialProducts.push(data);
    setAddform(false);
  };
  const handleBack =()=>{
    setAddform(false);
  }

  return (
    <>
      {Addform && (
        <div className="addform">
          <Addproduct onSave={handlesave} handleback={handleBack}/>
        </div>
      )}
      <div style={{ width: "100%", opacity: Addform ? "0.2" : "1" }}>
        <div className="productHearder">
          <CommonPara label="Product Mangement" />
          <CommonButton
            className="AddBtn"
            logo="addproductlogo"
            label={<BiCartAdd/>}
            label2="Add"
            onClick={handleclick}
          />
        </div>
        <div className="ProductContainer">
          <CommonTable data={initialProducts} columns={columns}/>
        </div>
      </div>
    </>
  );
};

export default Product;
