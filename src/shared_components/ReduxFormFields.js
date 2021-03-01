import React from "react";
import Select from "react-select";

const errorMessage = (error, warning) =>
  (error && <span className="field-error pl-1">{error}</span>) ||
  (warning && <span className="field-error pl-1">{warning}</span>);

export const renderInputField = ({
  input,
  label,
  placeholder,
  isDisabled,
  type,
  inputClass,
  meta: { touched, error, warning },
}) => (
  <div className="text-left mt-3 mt-md-4">
    <label className="form-label">{label}</label>
    {type === "textarea" ? (
      <textarea
        {...input}
        placeholder={placeholder}
        type={type}
        className="form-input-field"
        disabled={isDisabled ? true : false}
      />
    ) : (
      <input
        {...input}
        placeholder={placeholder}
        type={type}
        className="form-input-field"
        disabled={isDisabled ? true : false}
      />
    )}
    {touched && errorMessage(error, warning)}
  </div>
);

export const renderSelectField = ({
  input,
  label,
  options,
  placeholder,
  selectClass,
  meta: { touched, error, warning },
}) => {
  return (
    <div className="form-set">
      <label>{label}</label>
      <Select
        {...input}
        type="select"
        value={input.value}
        onChange={(value) => input.onChange(value)}
        onBlur={() => input.onBlur(input.value)}
        options={options}
        placeholder={placeholder}
        className={selectClass}
      />
      {touched && errorMessage(error, warning)}
    </div>
  );
};

export const renderCheckboxField = ({
  input,
  label,
  meta: { touched, error, warning },
}) => {
  return (
    <div className="option-pair align-items-center">
      <input
        {...input}
        type="checkbox"
        value={input.value}
        onChange={(value) => input.onChange(value)}
        checked={input.value}
      />
      <label className="ml-1 form-label">{label}</label>
      {touched && errorMessage(error, warning)}
    </div>
  );
};

export const renderRadioField = ({
  input,
  label,
  meta: { touched, error, warning },
}) => {
  return (
    <div className="option-pair align-items-center d-flex mt-2">
      <input
        {...input}
        type="radio"
        value={input.value}
        onChange={(value) => input.onChange(value)}
        onBlur={() => input.onBlur(input.value)}
      />
      <label className="ml-1 form-label">
        <p>{label}</p>
      </label>
      {touched && errorMessage(error, warning)}
    </div>
  );
};

export const renderSwitchField = ({
  input,
  meta: { touched, error, warning },
}) => {
  return (
    <>
      <input {...input} type="checkbox" />
      <span className="slider round"></span>
      {touched && errorMessage(error, warning)}
    </>
  );
};
