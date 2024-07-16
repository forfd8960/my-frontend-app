import React from "react";

const OrderBy = ({ options, selectedValue, onChange }) => {
  return (
    <div>
      <label>
        Choose an option:
        <select
          className="form-select"
          aria-label="Default select example"
          value={selectedValue}
          onChange={onChange}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default OrderBy;
