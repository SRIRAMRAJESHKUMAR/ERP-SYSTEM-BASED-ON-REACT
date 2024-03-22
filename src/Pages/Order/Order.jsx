import React, { useEffect, useState } from "react";
import OrderCard from "../../Common/Ordercard/OrderCard";
import "./Order.css";
import CommonPara from "../../Common/Para/Para";
import ViewOrder from "../../Common/ViewOrder/ViewOrder";
import { initialOrders } from "../../Common/Data/Data";

const Order = () => {
  const [Viewmore, setViewmore] = useState(false);
  const [dataindex, setdataindex] = useState("");

  const hand = (index) => {
    setViewmore(!Viewmore);
    setdataindex(index);
  };
  useEffect(() => {
  }, [dataindex]);
  return (
    <div style={{ width: "90%"}}>
      <CommonPara className="ordertitle" label="Order Management" />
      <div className="viewmore">{Viewmore && <ViewOrder IndexNum={dataindex} back={hand} />}</div>
      <div style={{ opacity: Viewmore ? "0.2" : "1" }} className="OrderCon">
        <OrderCard onview={hand} />
      </div>
    </div>
  );
};

export default Order;
