import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { increment, decrement } from "../redux/actions";

import "./shop.scss";

import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Title, ShopItem, Header } from "./components";

const StyledButton = withStyles({
  root: {
    borderRadius: 0,
    width: "100%",
    height: "40px",
  },
})(Button);

const Shop = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="main">
        <div className="leftSection">
          <Title />
          <div className="listItems">
            <ShopItem />
            <ShopItem />
            <ShopItem />
          </div>
          <StyledButton variant="contained">Добавить заведение</StyledButton>
        </div>
        <div className="rightSection">
          <p>Hello</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Shop;
