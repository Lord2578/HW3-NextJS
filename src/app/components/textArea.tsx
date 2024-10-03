import React from 'react';

interface TextAreaProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
}

const TextArea: React.FC<TextAreaProps> = ({ label, value, onChange, required }) => {
  return (
    <div>
      <label>{label}</label>
      <textarea value={value} onChange={onChange} required={required}></textarea>
    </div>
  );
};

export default TextArea;
