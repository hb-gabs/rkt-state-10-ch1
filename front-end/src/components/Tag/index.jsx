import { StyledTag, StyledTagName } from "./styles";

export const Tag = ({ name }) => {
    return (
        <StyledTag>
            <StyledTagName>
                { name }
            </StyledTagName>
        </StyledTag>
    );
}