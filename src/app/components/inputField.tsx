import React from 'react';

interface InputFieldProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({ label, value, onChange, type = "text", required }) => {
  return (
    <div>
      <label>{label}</label>
      <input type={type} value={value} onChange={onChange} required={required} />
    </div>
  );
};

export default InputField;
