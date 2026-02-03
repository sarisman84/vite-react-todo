import { Plus } from "lucide-react";
import { useContext } from "react";
import { Root } from "../../../data/context/root";


function CategoryCreateButton() {
  const { categoryEvents } = useContext(Root)

  function _createNewCategory() {
    categoryEvents.createCategory("New Category");
  }
  return (
    <div className="flex max-h-10 p-4 items-center bg-accent-50 rounded-md  shadow hover:bg-accent-100">
      <Plus size={20} className="" />
      <button onClick={() => _createNewCategory()}>Add New Category</button>
    </div>
  );
}

export default CategoryCreateButton;
