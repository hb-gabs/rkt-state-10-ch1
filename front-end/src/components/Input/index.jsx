import { StyledInput, StyledInputContainer } from "./styles";
import { AiOutlineSearch } from 'react-icons/ai';

export const Input = ({
    type = 'text',
    placeholder = 'Digite algo',
    icon: Icon,
    onChange = () => {},
    value = "",
    ...rest
}) => {
    return (
        <StyledInputContainer {...rest}>
            {Icon && <Icon />}
            <StyledInput 
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
            />
        </StyledInputContainer>
    );
}