import { FC } from 'react';

type Props = {
  small?: boolean,
  margin?: boolean,
};

const FhiSpinner: FC<Props> = ({
  small = false,
  margin = false,
}) => (
  <div className={`spinner-border ${small ? 'spinner-border-sm' : ''} ${margin ? 'm-5' : ''}`} role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
);

export default FhiSpinner;
