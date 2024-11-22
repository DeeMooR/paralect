import { ForwardRefExoticComponent, useMemo, useState } from 'react';
import React, { NextPage } from 'next';
import Head from 'next/head';
import { Button, Stack, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconPencil, IconProps, IconTrash } from '@tabler/icons-react';

import { ModalDelete, ModalVacancy, Table } from 'components';

import { ResponseToVacancy, ResponseToVacancyTable } from 'types';

import { COLUMNS, DEFAULT_PAGE, PER_PAGE } from './constants';

const data = [
  {
    _id: 'asdasd',
    company: 'Paralect',
    vacancy: 'Frontend developer',
    salaryRange: '500 - 1000',
    status: 'active',
    note: 'test task',
  },
];

const Vacancies: NextPage = () => {
  const iconSize = 24;
  const [openedDelete, { open: openDelete, close: closeDelete }] = useDisclosure(false);
  const [openedVacancy, { open: openVacancy, close: closeVacancy }] = useDisclosure(false);
  const [interactionId, setInteractionId] = useState<string | null>(null);

  const deleteResponse = () => {};

  const getButton = (id: string, Icon: ForwardRefExoticComponent<IconProps>, onClickAction: () => void) => {
    const onClick = () => {
      setInteractionId(id);
      onClickAction();
    };
    return <Icon size={iconSize} onClick={onClick} />;
  };

  const getBtnUpdate = (id: string) => getButton(id, IconPencil, openVacancy);
  const getBtnDelete = (id: string) => getButton(id, IconTrash, openDelete);

  const getResponseById = (): ResponseToVacancy | undefined =>
    interactionId ? data.find((item) => item._id === interactionId) : undefined;

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
        <Button size="md" ml="auto" radius={12} color="blue" onClick={openVacancy}>
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
      <ModalDelete title="Delete response?" opened={openedDelete} close={closeDelete} apply={deleteResponse} />
      <ModalVacancy
        title="Update response?"
        defaultValues={getResponseById()}
        opened={openedVacancy}
        close={closeVacancy}
      />
    </>
  );
};

export default Vacancies;
