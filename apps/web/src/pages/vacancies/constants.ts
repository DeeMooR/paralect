import { ColumnDef } from '@tanstack/react-table';

import { ResponseToVacancy } from 'types';

export const DEFAULT_PAGE = 1;
export const PER_PAGE = 10;

export const COLUMNS: ColumnDef<ResponseToVacancy>[] = [
  {
    accessorKey: 'company',
    header: 'Company',
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: 'vacancy',
    header: 'Vacancy',
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: 'salaryRange',
    header: 'Salary Range',
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: 'note',
    header: 'Note',
    cell: (info) => info.getValue(),
  },
];
