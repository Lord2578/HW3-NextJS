import React from 'react';

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange, required }) => {
  return (
    <div className="checkbox-container">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        required={required}
      />
      <label>{label}</label>
    </div>
  );
};

export default Checkbox;
