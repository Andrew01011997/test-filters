import { useRef, useState } from 'react';
import { DayPickerSingleProps } from 'react-day-picker';
import { useClickOutside } from '../../hooks/use-click-outside';
import { useToggle } from '../../hooks/use-toggle';
import { DatePickerDropdown } from './date-picker-dropdown';
import { DatePickerInput } from './date-picker-input';

interface Props extends Omit<DayPickerSingleProps, 'mode'> { }

export function DatePicker({ ...props }: Props) {
    const [isOpen, toggleOpen] = useToggle()
    const [selectedDate, setSelectedDate] = useState<Date>()

    const containerRef = useRef<HTMLDivElement | null>(null)

    useClickOutside(containerRef, () => isOpen && toggleOpen())

    return (
        <div ref={containerRef} className='relative mx-3 my-2 flex-1'>
            <DatePickerInput toggleOpen={toggleOpen} selectedDate={selectedDate} />
            <DatePickerDropdown isOpen={isOpen} {...props} onSelect={setSelectedDate} />
        </div>
    )
}