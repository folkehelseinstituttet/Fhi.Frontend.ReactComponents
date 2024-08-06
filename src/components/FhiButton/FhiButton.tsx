import { FC } from 'react';

type Props = {
  className?: string,
  children: React.ReactNode,
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
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
  className = '',
  children,
  onClick = () => {},
  disabled = false,
  type = 'button',
  size = undefined,
  secondary = false,
  outline = false,
  flat = false,
  icon = false,
  spinner = false,
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
      {spinner && '\u00A0\u00A0'/* Legger til litt luft mellom spinner og tekst */}
      {children}
    </button>
  );
};

export default FhiButton;
