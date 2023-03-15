import { FC } from 'react';

type Props = {
  className?: string,
  children: React.ReactNode,
  onClick?: () => void,
  disabled?: boolean,
  type?: 'submit' | 'button';
  size?: 'small' | 'medium' | 'large',
  secondary?: boolean,
  outline?: boolean, // Deprecated: Removed from style so replaced by secondary
  flat?: boolean,
  icon?: boolean,
  spinner?: boolean,
};

const FhiButton: FC<Props> = ({
  className,
  children,
  onClick,
  disabled,
  type,
  size,
  secondary,
  outline,
  flat,
  icon,
  spinner,
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

  if (secondary || outline) {
    btnClass += ' fhi-btn-secondary';
  } else if (flat) {
    btnClass += ' fhi-btn-flat';
  } else if (icon) {
    btnClass += ' fhi-btn-icon';
  } else {
    btnClass += ' fhi-btn-primary';
  }

  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} className={btnClass} onClick={onClick} disabled={disabled}>
      {spinner && <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />}
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
  flat: false,
  icon: false,
  spinner: false,
  type: 'button',
  onClick: () => {},
};

export default FhiButton;
