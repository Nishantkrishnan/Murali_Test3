import React from "react";
const Header = props => {
  let { propsData } = props;
  console.log(propsData, "llllll");

  return (
    <div>
      <label>{propsData.label}</label>
    </div>
  );
};
export default Header;
