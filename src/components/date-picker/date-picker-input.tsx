import { format } from 'date-fns'

interface Props {
    toggleOpen: VoidFunction;
    selectedDate: Date | undefined;
}

export function DatePickerInput({ toggleOpen, selectedDate }: Props) {
    return (
        <div
            className='rounded-md h-9.5 border border-gray-300 box-border px-2 py-2.5 cursor-pointer'
            onClick={toggleOpen}
        >
            <span className="block text-sm">{selectedDate ? format(selectedDate, 'dd MMM yyyy') : 'Please select date'}</span>
        </div>
    )
}