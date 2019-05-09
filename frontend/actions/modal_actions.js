export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = (modal, data) => {
  return {
    type: OPEN_MODAL,
    modal: {modalType: modal, post:{data}}
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};

