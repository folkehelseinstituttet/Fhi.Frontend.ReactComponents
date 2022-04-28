import { FC } from 'react';

type Props = {
  text: string,
  onClick: () => void,
  size?: 'small' | 'medium' | 'large',
  secondary?: boolean,
  outline?: boolean,
};

const Button: FC<Props> = ({
  text, size = undefined, secondary, outline, onClick,
}) => {
  let className = 'btn';
  if (size === 'small') {
    className += ' btn-sm';
  }
  if (size === 'medium') {
    className += ' btn-md';
  }
  if (size === 'large') {
    className += ' btn-lg';
  }

  if (outline) {
    className += ' fhi-btn-outline';
  } else {
    className += ' fhi-btn';
  }

  if (secondary) {
    className += '-secondary';
  } else {
    className += '-primary';
  }

  return <button type="button" className={className} onClick={onClick}>{text}</button>;
};

Button.defaultProps = {
  size: undefined,
  secondary: false,
  outline: false,
};

export default Button;
