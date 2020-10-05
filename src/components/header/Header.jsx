import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DECREASE, INCREASE } from "../../redux/actioncreator";

const Header = () => {
  const numbers = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch({ type: INCREASE });
  };

  const handleDecrease = () => {
    dispatch({ type: DECREASE });
  };
  return (
    <header>
      <h1>Header</h1>
      <h3>{numbers}</h3>
      <button onClick={handleIncrease}>increase</button>
      <button onClick={handleDecrease}>decrease</button>
    </header>
  );
};

export default Header;
