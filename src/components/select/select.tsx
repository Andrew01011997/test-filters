import ReactSelect from 'react-select'

interface Props extends Omit<PropsOf<typeof ReactSelect>, 'isSerchable' | 'isClearable' | 'name'> {

}

export function Select({ className, ...props }: Props) {
    return (
        <ReactSelect
            {...props}
            className={`w-full px-3 py-2 rounded-md text-sm ${className}`}
            isSearchable
            isClearable
        />
    )
}