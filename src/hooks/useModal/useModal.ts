import { UseModal } from './useModal.types';
import { useState } from 'react';

export const useModal: UseModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => setIsOpen(true);
  const hideModal = () => setIsOpen(false);

  return {
    isOpen,
    showModal,
    hideModal,
  };
};
