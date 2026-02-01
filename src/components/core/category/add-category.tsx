import type { OnCreateCategory } from "../../../data/category";

interface CategoryAddEntryContext {
    createCategory : OnCreateCategory;
}

function CategoryAddEntry(ctx : CategoryAddEntryContext) {
    return(
        <>
        <div>
            <button>New Category</button>
        </div>
        </>
    )
}

export default CategoryAddEntry;