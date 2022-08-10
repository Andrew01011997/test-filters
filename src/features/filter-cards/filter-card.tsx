import { Dispatch } from "react";
import { Filter } from "../../models/filter";

interface Props {
    item: Filter;
    onClickEdit: Dispatch<Get<Filter, 'id'>>;
}

export function FilterCard({ item, onClickEdit }: Props) {
    return (
        <div className="rounded-xl border border-gray-500 p-3 flex flex-col gap-2">
            <span>id: {item.id}</span>
            <span>name: {item.name}</span>
            <span>{JSON.stringify(item.conditions, null, '\t')}</span>
        </div>
    )
}