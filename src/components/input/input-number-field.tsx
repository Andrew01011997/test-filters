import { InputField } from "./input-field";


interface Props extends PropsOf<typeof InputField>{}

export function InputNumberField(props: Props){
    return <InputField {...props} type="number" />
}