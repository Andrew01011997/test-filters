import { useCallback } from "react";
import { Filter } from "../../models/filter";
import { setEditId } from "../../modules/edit/actions";
import { useAppDispatch } from "../../modules/store";
import { FilterCard } from "./filter-card";

interface Props {
    items: Filter[];
}

export function FilterCards({ items }: Props) {
    const dispatch = useAppDispatch()
    
    const onClickEdit = useCallback((id: Get<Filter, 'id'>) => {
        dispatch(setEditId(id))
    }, [dispatch])

    return (
        <div className="flex flex-col gap-2 w-full">
            {items.map((item) => <FilterCard key={item.id} item={item} onClickEdit={onClickEdit} />)}
        </div>
    )
}