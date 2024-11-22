import { ForwardRefExoticComponent, useMemo, useState } from 'react';
import React, { NextPage } from 'next';
import Head from 'next/head';
import { Button, Stack, Title } from '@mantine/core';
import { IconPencil, IconProps, IconTrash } from '@tabler/icons-react';

import { ModalDelete, ModalVacancy, Table } from 'components';

import { ResponseToVacancy, ResponseToVacancyTable } from 'types';

import { COLUMNS, DEFAULT_PAGE, PER_PAGE } from './constants';

const data = [
  {
    _id: '1',
    company: 'Paralect',
    vacancy: 'Frontend developer',
    salaryRange: '500 - 1000',
    status: 'active',
    note: 'test task',
  },
];

const Vacancies: NextPage = () => {
  const iconSize = 24;
  const [idDelete, setIdDelete] = useState('');
  const [idVacancy, setIdVacancy] = useState('');

  const deleteResponse = () => {};

  const getButton = (
    id: string,
    Icon: ForwardRefExoticComponent<IconProps>,
    onClickAction: (value: string) => void,
  ) => {
    const onClick = () => {
      onClickAction(id);
    };
    return <Icon size={iconSize} onClick={onClick} />;
  };

  const getBtnUpdate = (id: string) => getButton(id, IconPencil, setIdVacancy);
  const getBtnDelete = (id: string) => getButton(id, IconTrash, setIdVacancy);

  const getResponseById = (): ResponseToVacancy | undefined => data.find((item) => item._id === idVacancy);

  const dataWithButtons = useMemo(
    () =>
      data.map((obj) => ({
        ...obj,
        btnUpdate: getBtnUpdate(obj._id),
        btnDelete: getBtnDelete(obj._id),
      })),
    [],
  );

  return (
    <>
      <Head>
        <title>Vacancies</title>
      </Head>

      <Stack h="100vh" w={1080} p={50} m="auto">
        <Title order={1} m="0 auto">
          List of responses to vacancies
        </Title>
        <Button size="md" ml="auto" radius={12} color="blue" onClick={() => setIdVacancy('1')}>
          Add response
        </Button>

        <Stack gap="lg">
          <Table<ResponseToVacancyTable>
            data={dataWithButtons}
            pageCount={1}
            page={DEFAULT_PAGE}
            perPage={PER_PAGE}
            columns={COLUMNS}
            isLoading={false}
          />
        </Stack>
      </Stack>
      <ModalDelete title="Delete response?" opened={!!idDelete} close={() => setIdDelete('')} apply={deleteResponse} />
      <ModalVacancy
        title="Update response?"
        defaultValues={getResponseById()}
        opened={!!idVacancy}
        close={() => setIdVacancy('')}
      />
    </>
  );
};

export default Vacancies;
