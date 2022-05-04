import { FC } from 'react';

type Props = {
  children: React.ReactNode,
  onClick: () => void,
  size?: 'small' | 'medium' | 'large',
  secondary?: boolean,
  outline?: boolean,
  className?: string,
  disabled?: boolean,
  type?: 'submit' | 'button';
};

const FhiButton: FC<Props> = ({
  children,
  size,
  secondary,
  outline,
  onClick,
  className,
  disabled,
  type,
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

  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} className={btnClass} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

FhiButton.defaultProps = {
  size: undefined,
  secondary: false,
  outline: false,
  className: '',
  disabled: false,
  type: 'button',
};

export default FhiButton;
