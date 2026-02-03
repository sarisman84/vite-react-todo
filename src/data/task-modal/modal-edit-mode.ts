const ModalEditMode = {
  View: 0,
  Edit: 1,
  Create: 2,
};

type ModalEditMode = (typeof ModalEditMode)[keyof typeof ModalEditMode];

export { ModalEditMode };