import React from 'react';

export type TableStructure = {
  key: number,
  link?: string,
  selected?: boolean,
  data: React.ReactNode[]
};
