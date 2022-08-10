import { useFilters } from "../../hooks/use-filters";
import { FilterCards } from "../filter-cards/filter-cards";


export function AvailableFilters(){
    const filters = useFilters();

    return (
        <div className="flex flex-col items-center space-y-3 w-full cursor-pointer">
            <h2 className="text-xl font-bold">Available filters</h2>
            <p className="text-sm italic">Click on any card to enter edit mode</p>
            <FilterCards items={filters} />
        </div>
    )
}