import React from "react";
import ColorPicker from "material-ui-color-picker";

function SelectColor(props) {
  const { name, value, onChange } = props;

  return (
    <ColorPicker
      name={name}
      defaultValue="#000"
      value={value}
      onChange={onChange}
    />
  );
}

export default SelectColor;
