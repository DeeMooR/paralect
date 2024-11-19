import React from 'react';
import { Button, Group, Modal, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

interface IModalDelete {
  title: string;
  opened: boolean;
  close: () => void;
  apply: () => void;
}

const ModalDelete = ({ title, opened, close, apply }: IModalDelete) => {
  const isMobile = useMediaQuery('(max-width: 50em)');

  const handleClickApply = () => {
    apply();
    close();
  };

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
          <Group gap={20} mb={10} wrap="nowrap">
            <Button size="lg" fullWidth radius={12} color="blue" onClick={close}>
              No, cancel
            </Button>
            <Button size="lg" fullWidth radius={12} color="red" onClick={handleClickApply}>
              Yes, delete
            </Button>
          </Group>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
};

export default ModalDelete;
