import ReactSelect from 'react-select'

interface Props extends Omit<PropsOf<typeof ReactSelect>, 'isSerchable' | 'isClearable' | 'name'> {
    label?: string;
}

export function Select({ className, label, ...props }: Props) {
    return (
        <div className='flex flex-col relative'>
            <ReactSelect
                {...props}
                className={`w-full px-3 py-2 rounded-md text-sm ${className}`}
                isSearchable
                isClearable
            />
            <div className='absolute ml-7 p-1 -mt-1.5 bg-white'>{label}</div>
        </div>
    )
}