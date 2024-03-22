import React from "react";
import { Path } from "./Router";
import { Route, Routes } from "react-router-dom";
import Dash from "../../Pages/Dashboard/Dash";
import Product from "../../Pages/Product/Product";
import Order from "../../Pages/Order/Order";
import Calender from "../../Pages/Calender/Calender";

export const Routercom = () => {
  const router = [
    {
      Path: Path.Home,
      Component: Dash,
    },
    {
      Path: Path.product,
      Component: Product,
    },
    {
      Path: Path.Order,
      Component: Order,
    },
    {
      Path: Path.Calender,
      Component:Calender,
    }

  ];
  return (
    <>
      <Routes>
        {router.map(({ Path, Component }, i) => (
          <Route path={Path} key={i} Component={Component} />
        ))}
      </Routes>
    </>
  );
};
