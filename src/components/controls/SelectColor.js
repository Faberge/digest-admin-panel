import React from "react";
import ColorPicker from "material-ui-color-picker";

function SelectColor(props) {
  const { name, value, onChange } = props;

  const convertToBeEventParam = (name, value) => ({
    target: {
      name,
      value,
    },
  });

  return (
    <ColorPicker
      name={name}
      defaultValue="#000"
      value={value}
      onChange={(value) => onChange(convertToBeEventParam(name, value))}
    />
  );
}

export default SelectColor;
