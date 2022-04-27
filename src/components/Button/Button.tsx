import { FC } from 'react';

type Props = {
  text: string,
  onClick: () => void,
};

const Button: FC<Props> = ({ text, onClick }) => <button type="button" onClick={onClick}>{text}</button>;

export default Button;
