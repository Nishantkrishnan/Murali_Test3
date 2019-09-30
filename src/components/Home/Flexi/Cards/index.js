import React from "react";
import { Card } from "@material-ui/core";

class Cards extends React.Component {
  render() {
    let { propsData } = this.props;

    let color=propsData.color;
    console.log(color, "Mcards");
    return (
      <div className="card">
        {propsData.cards.map((item, index) => (
          <Card  style={{color:item.color}}><span><label > {item.label}</label></span></Card>
        ))}
      </div>
    );
  }
}
export default Cards;
