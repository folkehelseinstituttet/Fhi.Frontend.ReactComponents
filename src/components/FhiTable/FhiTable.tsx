import { FC } from 'react';
import styled from 'styled-components';

import { TableStructure } from './FhiTable.model';

type Props = {
  headers: string[],
  data: TableStructure[],
  onNavigate: (link: string)=>{},
};

const TabellRad = styled.tr`
    &:nth-child(even) {
    background: ${({ theme }) => theme.fhiTableSecondary}; 
  }
`;

const KlikkbarTabellRad = styled(TabellRad)`
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.fhiBlueGrey2};
  }
`;

const FhiTable: FC<Props> = ({ data, headers, onNavigate }) => (
  <table className="table table-borderless w-100">
    <thead>
      <tr>
        {headers.map((t) => (
          <th key={t}>{t}</th>
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
            >
              {d.data.map((v, i) => (
                // eslint-disable-next-line react/no-array-index-key
                <td key={i}>{v}</td>
              ))}
            </KlikkbarTabellRad>
          ) : (
            <TabellRad key={d.key}>
              {d.data.map((v, i) => (
                // eslint-disable-next-line react/no-array-index-key
                <td key={i}>{v}</td>
              ))}
            </TabellRad>
          )
      ))}
    </tbody>
  </table>
);

export default styled(FhiTable)``;
