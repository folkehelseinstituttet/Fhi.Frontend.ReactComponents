import { FC } from 'react';

type Props = {
  text: string,
  onClick: () => void,
  size?: 'small' | 'medium' | 'large',
  secondary?: boolean,
  outline?: boolean,
  className?: string,
};

const FhiButton: FC<Props> = ({
  text, size = undefined, secondary, outline, onClick, className,
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

  return <button type="button" className={btnClass} onClick={onClick}>{text}</button>;
};

FhiButton.defaultProps = {
  size: undefined,
  secondary: false,
  outline: false,
  className: '',
};

export default FhiButton;
