import React from "react";

import "./Dash.css";
import { FaBox, FaClipboardList, FaCalendarAlt } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import Card from "../../Common/Card/Card";
import { initialOrders } from "../../Common/Data/Data";
import { initialProducts } from "../../Common/Data/Data";
import { Path } from "../../Common/Router/Router";
import { useNavigate } from "react-router-dom";

const Dash = () => {
  const Navigate = useNavigate("");
  const Data = [
    {
      Logo: <FaBox />,
      Info: "Total Products",
      Count: initialProducts.length,
      navi: Path.product,
    },
    {
      Logo: <FaClipboardList />,
      Info: "Total Orders",
      Count: initialOrders.length,
      navi: Path.Order,
    },
    {
      Logo: <FaCalendarAlt />,
      Info: "Calender View",
      Count: <BsArrowRight />,
      navi: Path.Calender,
    },
  ];

  const HandleNavigate = (e) => {
    Navigate(e);
  };
  return (
    <>
      <div className="card-container">
        {Data.map((data, index) => {
          return (
            <div className="Cards" key={index}>
              <Card
                onclick={() => {
                  HandleNavigate(data.navi);
                }}
                logo={data.Logo}
                info={data.Info}
                count={data.Count}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Dash;
