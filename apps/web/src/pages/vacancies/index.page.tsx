import { ForwardRefExoticComponent, useState } from 'react';
import React, { NextPage } from 'next';
import Head from 'next/head';
import { Button, Stack, Title } from '@mantine/core';
import { IconPencil, IconProps, IconTrash } from '@tabler/icons-react';

import { responseToVacancyApi } from 'resources/responseToVacancy';

import { ModalDelete, ModalVacancy, Table } from 'components';

import { ResponseToVacancy, ResponseToVacancyTable, UpdateResponseToVacancyParams } from 'types';

import { COLUMNS, DEFAULT_PAGE, PER_PAGE } from './constants';

// const data = [
//   {
//     _id: '1',
//     company: 'Paralect',
//     vacancy: 'Frontend developer',
//     salaryRange: '500 - 1000',
//     status: 'active',
//     note: 'test task',
//   },
// ];

const Vacancies: NextPage = () => {
  const iconSize = 24;
  const [idDelete, setIdDelete] = useState('');
  const [idUpdate, setIdUpdate] = useState('');
  const [idCreate, setIdCreate] = useState('');

  const { data, isPending } = responseToVacancyApi.useGetResponseToVacancy();
  const { mutate: removeResponseToVacancy } = responseToVacancyApi.useRemoveResponseToVacancy();
  const { mutate: updateResponseToVacancy } =
    responseToVacancyApi.useUpdateResponseToVacancy<UpdateResponseToVacancyParams>();
  const { mutate: createResponseToVacancy } =
    responseToVacancyApi.useCreateResponseToVacancy<UpdateResponseToVacancyParams>();

  const removeResponse = () => {
    if (!idDelete) return;
    removeResponseToVacancy(idDelete);
  };

  const updateResponse = async (body: UpdateResponseToVacancyParams) => {
    updateResponseToVacancy(body);
  };

  const createResponse = async (body: UpdateResponseToVacancyParams) => {
    createResponseToVacancy(body);
  };

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

  const getBtnUpdate = (id: string) => getButton(id, IconPencil, setIdUpdate);
  const getBtnDelete = (id: string) => getButton(id, IconTrash, setIdDelete);

  const getResponseById = (): ResponseToVacancy | undefined =>
    data ? data.find((item) => item._id === idUpdate) : undefined;

  const dataWithButtons = () =>
    data
      ? data.map((obj) => ({
          ...obj,
          btnUpdate: getBtnUpdate(obj._id),
          btnDelete: getBtnDelete(obj._id),
        }))
      : [];

  return (
    <>
      <Head>
        <title>Vacancies</title>
      </Head>

      <Stack h="100vh" w={1080} p={50} m="auto">
        <Title order={1} m="0 auto">
          List of responses to vacancies
        </Title>
        <Button size="md" ml="auto" radius={12} color="blue" onClick={() => setIdCreate('1')}>
          Add response
        </Button>

        <Stack gap="lg">
          <Table<ResponseToVacancyTable>
            data={dataWithButtons()}
            pageCount={1}
            page={DEFAULT_PAGE}
            perPage={PER_PAGE}
            columns={COLUMNS}
            isLoading={isPending}
          />
        </Stack>
      </Stack>
      <ModalDelete title="Delete response?" opened={!!idDelete} close={() => setIdDelete('')} apply={removeResponse} />
      <ModalVacancy
        title="Update response?"
        defaultValues={getResponseById()}
        opened={!!idUpdate}
        close={() => setIdUpdate('')}
        apply={updateResponse}
      />
      <ModalVacancy title="Create response?" opened={!!idCreate} close={() => setIdCreate('')} apply={createResponse} />
    </>
  );
};

export default Vacancies;
