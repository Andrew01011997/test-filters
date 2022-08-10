import { Dispatch, useCallback, useRef, useState } from 'react';
import { DayPickerSingleProps } from 'react-day-picker';
import { format } from 'date-fns';
import { useToggle } from '../../hooks/use-toggle';
import { DatePickerDropdown } from './date-picker-dropdown';
import { DatePickerInput } from './date-picker-input';

interface Props extends Omit<DayPickerSingleProps, 'mode' | 'hidden' | 'onSelect'> {
    onSelect: Dispatch<string | null>;
    label?: string;
}

export function DatePicker({ onSelect, label, ...props }: Props) {
    const [isOpen, toggleOpen] = useToggle()
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(props.selected ?? undefined)

    const containerRef = useRef<HTMLDivElement | null>(null)

    const handleSelect = useCallback((d: Date | undefined) => {
        setSelectedDate(d);
        onSelect?.(d ? format(d, 'MM-dd-yyyy') : null);
    }, [onSelect, setSelectedDate])

    return (
        <div ref={containerRef} className='relative mx-3 my-2 flex-1'>
            <DatePickerInput toggleOpen={toggleOpen} selectedDate={selectedDate} label={label} />
            <DatePickerDropdown isOpen={isOpen} {...props} onSelect={handleSelect} />
        </div>
    )
}