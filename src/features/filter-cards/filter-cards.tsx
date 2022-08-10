import { useCallback } from "react";
import { Filter } from "../../models/filter";
import { FilterCard } from "./filter-card";

interface Props {
    items: Filter[];
}

export function FilterCards({ items }: Props) {
    const onClickEdit = useCallback((id: Get<Filter, 'id'>) => {
        // set to store edit id
    }, [])

    return (
        <div className="flex flex-col gap-2 w-full">
            {items.map((item) => <FilterCard key={item.id} item={item} onClickEdit={onClickEdit} />)}
        </div>
    )
}