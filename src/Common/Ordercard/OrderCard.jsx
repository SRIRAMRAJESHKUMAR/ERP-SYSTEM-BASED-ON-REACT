import React, { useState } from "react";
import "./OrderCard.css";
import CommonPara from "../Para/Para";
import { initialOrders } from "../Data/Data";
import CommonButton from "../Button/Button";
import { FaShippingFast } from "react-icons/fa";
import { TbViewportWide } from "react-icons/tb";
import { AiFillDelete } from "react-icons/ai";

const OrderCard = ({ onview }) => {
  const [orders, setorders] = useState(initialOrders);

  const handledelete = (index) => {
    const updatedorders = [...orders];
    updatedorders.splice(index, 1);
    setorders(updatedorders);
  };

  const handlestatus = (index) => {
    const updateorders = [...orders];
   if (updateorders[index].status != 'Delivered'){
    updateorders[index].status = "Shipped";
    setorders(updateorders);
   }
    
  };

  return (
    <div className="orderCardContainer">
      {orders.map((data, index) => {
        return (
          <div key={index} className="orderCard">
            <div className="ordercontant">
              <div className="first">
                <CommonPara label="Order ID:" label2={data.id} />
                <CommonPara label="Name:" label2={data.customerName} />
              </div>
              <div className="sec">
                <CommonPara label="Order Date:" label2={data.orderDate} />
                <CommonPara
                  classnamelabel2="OrderStatus"
                  label="Status:"
                  label2={data.status}
                />
              </div>
            </div>
            <div className="thirdbtn">
              <CommonButton
                onClick={() => onview(index)}
                className="btn"
                label={<TbViewportWide/>}
                label2="View"
              />
              <CommonButton
                onClick={() => handlestatus(index)}
                className="btn2"
                label2='Ship'
                label={<FaShippingFast />}
              />
              <CommonButton
                onClick={() => handledelete(index)}
                className="btn3"
                label={<AiFillDelete/>}
                label2="Delete"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OrderCard;
