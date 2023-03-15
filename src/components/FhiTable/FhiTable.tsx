import { FC } from 'react';
import styled from 'styled-components';

import { TableStructure } from './FhiTable.model';

type Props = {
  className?: string,
  headers: string[],
  data: TableStructure[],
  onNavigate: (link: string)=>{},
  compact?: boolean,
  striped?: boolean,
  hover?: boolean,
};

const TabellRad = styled.tr`
    &:nth-child(even) {
    background: ${({ theme }) => theme.fhiGreyLight2}; 
  }
`;

const KlikkbarTabellRad = styled(TabellRad)`
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.fhiBlueGrey1};
  }
`;

const FhiTable: FC<Props> = ({
  className,
  data,
  headers,
  onNavigate,
  compact,
  striped,
  hover,
}) => (
  <div className={`${className} table-responsive`}>
    <table className={`table ${compact ? 'table-sm' : ''} ${striped ? 'table-striped' : ''} ${hover ? 'table-hover' : ''}`}>
      <thead>
        <tr>
          {headers.map((t) => (
            <th key={t} scope="col">{t}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((d) => (
          d.link
            ? (
              <KlikkbarTabellRad
                key={d.key}
                onClick={() => {
                  if (d.link) {
                    onNavigate(d.link);
                  }
                }}
                aria-selected={!!d.selected}
              >
                {d.data.map((v, i) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <td key={i}>{v}</td>
                ))}
              </KlikkbarTabellRad>
            ) : (
              <TabellRad key={d.key} aria-selected={!!d.selected}>
                {d.data.map((v, i) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <td key={i}>{v}</td>
                ))}
              </TabellRad>
            )
        ))}
      </tbody>
    </table>
  </div>
);

FhiTable.defaultProps = {
  className: '',
  compact: false,
  hover: false,
  striped: true,
};

export default FhiTable;
