import { ColumnDef } from '@tanstack/react-table';

import { ResponseToVacancyTable } from 'types';

export const DEFAULT_PAGE = 1;
export const PER_PAGE = 10;

export const COLUMNS: ColumnDef<ResponseToVacancyTable>[] = [
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
  {
    accessorKey: 'btnUpdate',
    header: '',
    size: 25,
    cell: (info) => info.row.original.btnUpdate,
  },
  {
    accessorKey: 'btnDelete',
    header: '',
    size: 25,
    cell: (info) => info.row.original.btnDelete,
  },
];
