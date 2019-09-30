import React from "react";
const Flexi = props => {
  let { items = [], handleFieldChange, handleOnSubmit } = props;
  console.log(items, "flexiii");

  
  const FlexiConfig = item => {
    let isChild = "children" in item;
    console.log(item.type, "flexiconfigqedweqfqw");
    if (isChild) {
      console.log(item.children, "Item child");
      return item.children.items.map((Data, Index) => {
        return <div>{FlexiConfig(Data)}</div>;
      });
    } else {
      const Components = require(`../Flexi/${item.type}`).default;
      return (
        <Components
          propsData={item.props}
          handleFieldChange={handleFieldChange}
          handleOnSubmit={handleOnSubmit}
        />
      );
    }
  };
  return <div>{items.map((item, index) => FlexiConfig(item))}</div>;
};

export default Flexi;
