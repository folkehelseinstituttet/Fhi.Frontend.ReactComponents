import React from 'react';

export type TableStructure = {
  key: number,
  link?: string,
  onClick?: (event: React.MouseEvent<HTMLTableRowElement, MouseEvent>) => void,
  selected?: boolean,
  data: React.ReactNode[]
};
