const ModalEditMode = {
  View: 0,
  Edit: 1,
  Create: 2,
};

type ModalEditMode = (typeof ModalEditMode)[keyof typeof ModalEditMode];

export { ModalEditMode };

export function toString(value : ModalEditMode) : keyof typeof ModalEditMode | undefined {
    return (Object.keys(ModalEditMode) as Array<keyof typeof ModalEditMode>).find(key => ModalEditMode[key] === value);
}