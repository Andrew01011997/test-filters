import { format, isValid } from 'date-fns'

interface Props {
    toggleOpen: VoidFunction;
    selectedDate: Date | undefined;
    label?: string;
}

export function DatePickerInput({ toggleOpen, selectedDate, label }: Props) {
    return (
        <div className='flex flex-col relative'>
            <div className='absolute ml-4 p-1 -mt-3.5 bg-white'>{label}</div>
            <div
                className='rounded-md h-9.5 border border-gray-300 box-border px-2 py-2.5 cursor-pointer'
                onClick={toggleOpen}
            >
                <span className="block text-sm">{selectedDate && isValid(selectedDate) ? format(selectedDate, 'dd MMM yyyy') : 'Select date'}</span>
            </div>
        </div>
    )
}