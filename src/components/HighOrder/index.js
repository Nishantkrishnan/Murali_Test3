import React from "react";

const hoc = (config) => Component => {
  console.log(config,"config");
  class HighOrder extends React.Component {
    state = {
      list: {},

    };

    handleOnSubmit = e => {
      //  e.preventDefault();
      let { list } = this.state;
      console.log(this.state.list);
    };
    handleFieldChange = event => {
      let { list } = this.state;
      const { name, value } = event.target;
      console.log(name, value);
      this.setState({
        list: {
          ...list,
          [name]: value
        }
      });
    };
    render() {
      const { list } = this.state;

      const { handleOnSubmit, handleFieldChange } = this;
      console.log(this);
      return (
        <Component
          handleOnSubmit={handleOnSubmit}
          config={config}
          handleFieldChange={handleFieldChange}
        />
      );
    }
  }
  return HighOrder;
};
export default hoc;
