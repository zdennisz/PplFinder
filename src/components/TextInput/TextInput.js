import React, { useEffect } from "react";
import * as C from "constant";
import { TextField } from "@material-ui/core";

const TextInput = ({
  rows,
  type,
  label,
  isDirty,
  isValid,
  required,
  disabled,
  onChange,
  multiline,
  fieldName,
  value = "",
  placeholder,
  autoFocus = false,
  variant = C.VARIANT.standard,
  size = C.SIZE.small,
}) => {
  useEffect(() => {
    onChange({ fieldName, value: value, isValid: validate(value) });
  }, []);

  const validate = (value) => {
    return value?.length > 0;
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const isValid = validate(value);
    onChange({ fieldName, value, isValid });
  };

  return (
    <TextField
      fullWidth
      type={type}
      size={size}
      rows={rows}
      label={label}
      value={value}
      variant={variant}
      required={required}
      disabled={disabled}
      autoFocus={autoFocus}
      multiline={multiline}
      onChange={handleChange}
      placeholder={placeholder}
      error={!disabled && isDirty && !isValid}
    />
  );
};

export default TextInput;
