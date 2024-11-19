import React, { NextPage } from 'next';
import Head from 'next/head';
import { Button, Stack, Title } from '@mantine/core';

import { Table } from 'components';

import { ResponseToVacancy } from 'types';

import { COLUMNS, DEFAULT_PAGE, PER_PAGE } from './constants';

const data = [
  {
    _id: 'asdasd',
    company: 'Paralect',
    vacancy: 'Frontend developer',
    salaryRange: '500 - 1000',
    responseStatus: 'active',
    note: 'test task',
  },
];

const Vacancies: NextPage = () => {
  const handleClickAdd = () => {};

  return (
    <>
      <Head>
        <title>Vacancies</title>
      </Head>

      <Stack h="100vh" w={1080} p={50} m="auto">
        <Title order={1} m="0 auto">
          List of responses to vacancies
        </Title>
        <Button w="fit-content" ml="auto" radius={50} onClick={handleClickAdd}>
          Add response
        </Button>

        <Stack gap="lg">
          <Table<ResponseToVacancy>
            data={data}
            pageCount={1}
            page={DEFAULT_PAGE}
            perPage={PER_PAGE}
            columns={COLUMNS}
            isLoading={false}
          />
        </Stack>
      </Stack>
    </>
  );
};

export default Vacancies;
