import { DatePickerField } from "../../../components/date-picker/date-picker-field";
import { InputNumberField } from "../../../components/input/input-number-field";
import { DefinitionType } from "../../../models/definition";

const BETWEEN_COMPONENTS = {
    [DefinitionType.DATE]: DatePickerField,
    [DefinitionType.NUMBERS]: InputNumberField,
    [DefinitionType.TEXT]: (_: { name: string }) => null
}

export function betweenHOK(type: DefinitionType) {
    const Component = BETWEEN_COMPONENTS[type]
    return ({ name, ...props }: PropsOf<typeof Component>) => {

        return (
            <div className="grid grid-cols-2 gap-2 w-full">
                <Component {...props} name={`${name}.0`} label="From" />
                <Component {...props} name={`${name}.1`} label="To" />
            </div>
        )
    }
}