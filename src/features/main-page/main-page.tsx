import { useEffect } from "react";
import { Button } from "../../components/button/button";
import { useToggle } from "../../hooks/use-toggle";
import { selectEditFilter } from "../../modules/edit/selectors";
import { useAppSelector } from "../../modules/store";
import { AvailableFilters } from "./available-filters";
import { ModalAddFilter } from "./modal-add-filter";

export function MainPage() {
    const [isOpen, toggleOpen] = useToggle();
    const editFilter = useAppSelector(selectEditFilter)

    useEffect(() => {
        if(editFilter !== undefined && !isOpen){
            toggleOpen()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [toggleOpen, editFilter])

    return (
        <>
            <ModalAddFilter isOpen={isOpen} onClose={() => isOpen && toggleOpen()} editFilter={editFilter} />
            <div className="max-w-[700px] mx-auto flex flex-col items-end p-4">
                <Button onClick={toggleOpen} >Add new filter</Button>
                <AvailableFilters />
            </div>
        </>
    )
}