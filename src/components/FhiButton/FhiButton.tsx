import { FC } from 'react';

type Props = {
  text: string,
  onClick: () => void,
  size?: 'small' | 'medium' | 'large',
  secondary?: boolean,
  outline?: boolean,
  className?: string,
  disabled?: boolean,
};

const FhiButton: FC<Props> = ({
  text, size, secondary, outline, onClick, className, disabled,
}) => {
  let btnClass = `${className} btn`;
  if (size === 'small') {
    btnClass += ' btn-sm';
  }
  if (size === 'medium') {
    btnClass += ' btn-md';
  }
  if (size === 'large') {
    btnClass += ' btn-lg';
  }

  if (outline) {
    btnClass += ' fhi-btn-outline';
  } else {
    btnClass += ' fhi-btn';
  }

  if (secondary) {
    btnClass += '-secondary';
  } else {
    btnClass += '-primary';
  }

  return <button type="button" className={btnClass} onClick={onClick} disabled={disabled}>{text}</button>;
};

FhiButton.defaultProps = {
  size: undefined,
  secondary: false,
  outline: false,
  className: '',
  disabled: false,
};

export default FhiButton;
