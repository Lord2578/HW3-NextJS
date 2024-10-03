import React from 'react';

interface RadioOption {
  label: string;
  value: string;
}

interface RadioGroupProps {
  legend: string;
  options: RadioOption[];
  value: string;
  onChange: (value: string) => void;
}

const RadioGroup: React.FC<RadioGroupProps> = ({ legend, options, value, onChange }) => {
  return (
    <fieldset className="radio-group">
      <legend>{legend}</legend>
      {options.map((option) => (
        <label key={option.value}>
          <input
            type="radio"
            name="query"
            value={option.value}
            checked={value === option.value}
            onChange={() => onChange(option.value)}
          />
          {option.label}
        </label>
      ))}
    </fieldset>
  );
};

export default RadioGroup;
