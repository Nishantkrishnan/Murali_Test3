import React from "react";
import TextField from "@material-ui/core/TextField";

class TexField extends React.Component {
  render() {
    let { propsData, handleFieldChange } = this.props;
    console.log(propsData, "texts");

    return (
      <TextField
        label={propsData.label}
        name={propsData.name}
        type={propsData.inputType}
        autoComplete="current-password"
        margin="normal"
        variant="outlined"
        onChange={handleFieldChange}
      />
    );
  }
}
export default TexField;
