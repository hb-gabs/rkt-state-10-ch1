import { StyledSection, StyledSectionTitle } from "./styles";


export const Section = ({
    title = 'Título',
    children
}) => {
    return (
        <StyledSection>
            <StyledSectionTitle>
                {title}
            </StyledSectionTitle>
            {children}
        </StyledSection>
    );
}