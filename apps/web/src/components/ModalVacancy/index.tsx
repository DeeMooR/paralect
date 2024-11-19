import React from 'react';
import { Button, Group, Modal, Stack, TextInput, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { createResponseToVacancySchema } from 'schemas';
import { CreateResponseToVacancyParams, ResponseToVacancy } from 'types';

interface IModalVacancy {
  title: string;
  defaultValues?: ResponseToVacancy;
  opened: boolean;
  close: () => void;
}

const ModalVacancy = ({ title, defaultValues, opened, close }: IModalVacancy) => {
  const isMobile = useMediaQuery('(max-width: 50em)');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateResponseToVacancyParams>({
    resolver: zodResolver(createResponseToVacancySchema),
    defaultValues,
  });

  const onSubmit = () => {};

  return (
    <Modal.Root opened={opened} onClose={close} size="md" fullScreen={isMobile} centered>
      <Modal.Overlay />
      <Modal.Content radius={15}>
        <Modal.Header>
          <Modal.CloseButton />
        </Modal.Header>
        <Modal.Body ml={20} mr={20}>
          <Title order={3} ta="center" mb={25}>
            {title}
          </Title>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack gap={32}>
              <Stack gap={20}>
                <TextInput
                  {...register('company')}
                  label="Company name"
                  placeholder="Enter company name"
                  error={errors.company?.message}
                />

                <TextInput
                  {...register('vacancy')}
                  label="Vacancy Name"
                  placeholder="Enter vacancy name"
                  error={errors.vacancy?.message}
                />

                <TextInput
                  {...register('salaryRange')}
                  label="Salary range"
                  placeholder="Enter salary range"
                  error={errors.salaryRange?.message}
                />

                <TextInput
                  {...register('status')}
                  label="Status"
                  placeholder="Enter status"
                  error={errors.status?.message}
                />

                <TextInput {...register('note')} label="Note" placeholder="Enter note" error={errors.note?.message} />
              </Stack>

              <Group gap={20} mb={10} wrap="nowrap">
                <Button size="lg" fullWidth radius={12} color="teal" onClick={close}>
                  No, cancel
                </Button>
                <Button type="submit" size="lg" fullWidth radius={12} color="blue">
                  {defaultValues ? 'Yes, update' : 'Yes, create'}
                </Button>
              </Group>
            </Stack>
          </form>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
};

export default ModalVacancy;
