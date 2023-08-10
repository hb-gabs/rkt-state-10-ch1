import { StyledTextarea } from "./styles";

export const Textarea = ({
    placeholder = 'Text area',
    value = "",
    onChange = () => {},
}) => {
    return (
        <StyledTextarea
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
}