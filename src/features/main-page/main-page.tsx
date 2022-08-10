import { Button } from "../../components/button/button";
import { useToggle } from "../../hooks/use-toggle";
import { AvailableFilters } from "./available-filters";
import { ModalAddFilter } from "./modal-add-filter";

export function MainPage() {
    const [isOpen, toggleOpen] = useToggle();
    return (
        <>
            <ModalAddFilter isOpen={isOpen} onClose={() => isOpen && toggleOpen()} />
            <div className="max-w-[700px] mx-auto flex flex-col items-end p-4">
                <Button onClick={toggleOpen} >Add new filter</Button>
                <AvailableFilters />
            </div>
        </>
    )
}