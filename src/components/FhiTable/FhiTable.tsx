import { FC } from 'react';

import { TableStructure } from './FhiTable.model';

type Props = {
  className?: string,
  headers: string[],
  data: TableStructure[],
  onNavigate?: (link: string) => {} | void | undefined,
  compact?: boolean,
  striped?: boolean,
  hover?: boolean,
};

const FhiTable: FC<Props> = ({
  className = '',
  data,
  headers,
  onNavigate = undefined,
  compact = false,
  striped = true,
  hover = false,
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
        {data.map((d) => {
          const clickProps: any = {};
          if (d.link && onNavigate) {
            clickProps.onClick = () => onNavigate(d.link!);
            clickProps.role = 'button';
          } else if (d.onClick) {
            clickProps.onClick = d.onClick;
          }
          return (
            <tr
              key={d.key}
              aria-selected={!!d.selected}
              {...clickProps}
            >
              {d.data.map((v, i) => (
                <td key={i}>{v}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
);

export default FhiTable;
