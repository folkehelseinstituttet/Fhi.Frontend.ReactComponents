import { FC, ChangeEvent } from 'react';

type SelectProps = {
  id: string;
  label: string;
  value: any;
  className?: string;
  onChange: (value: any) => void;
  options: {
    id: string;
    text: string;
    value: any;
  }[]
};

const FhiSelect: FC<SelectProps> = ({
  id,
  label,
  value,
  onChange,
  className,
  options,
}) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className={className}>
      <label htmlFor={id} className="form-label">{label}</label>
      <select
        className="form-select"
        id={id}
        value={value}
        onChange={handleChange}
      >
        {options.map((option) => (
          <option key={option.id} value={option.value}>{option.text}</option>
        ))}
      </select>
    </div>
  );
};

FhiSelect.defaultProps = {
  className: '',
};

export default FhiSelect;
