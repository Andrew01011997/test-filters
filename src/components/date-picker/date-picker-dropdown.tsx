import { DayPicker, DayPickerSingleProps } from 'react-day-picker';

interface Props extends Omit<DayPickerSingleProps, 'mode' | 'hidden'> {
    isOpen: boolean;
}

export function DatePickerDropdown({ isOpen, ...props }: Props){
    if(isOpen)
        return (<div className='absolute left-0 top-11 border rounded-md border-gray-300 w-min shadow-lg bg-white'>
            <DayPicker
                {...props}
                mode="single"
            />
        </div>
    )
    
    return null;
}