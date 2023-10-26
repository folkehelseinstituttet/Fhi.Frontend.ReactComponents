import { FC, ChangeEvent } from 'react';

type SelectProps = {
  id: string;
  label: string;
  value: any;
  className?: string;
  onChange: (value: any) => void;
  placeholder?: string;
  options: {
    id: string;
    text: string;
    value: any;
    disabled?: boolean;
  }[]
};

const FhiSelect: FC<SelectProps> = ({
  id,
  label,
  value,
  onChange,
  className,
  options,
  placeholder,
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
        value={value === undefined && placeholder ? 'PLACEHOLDER' : value}
        onChange={handleChange}
      >
        {placeholder && (
          <option value="PLACEHOLDER" disabled hidden>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option
            key={option.id}
            value={option.value}
            disabled={option.disabled}
          >
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
};

FhiSelect.defaultProps = {
  className: '',
  placeholder: undefined,
};

export default FhiSelect;
