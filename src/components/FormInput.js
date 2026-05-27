import { useState } from "react";

function FormInput({                                                                                  //P-destructured
  label,
  type,
  placeholder,
  value,
  onChange,
  error,
  maxLength,
}) {

                                                                                                  // js    
  return (
    <div className="form-group">
      <label>{label}</label>

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        maxLength={maxLength}
        onChange={onChange}
      />

      {error && <span className="error-msg">{error}</span>} 
    </div>
  );
}

export default FormInput;
