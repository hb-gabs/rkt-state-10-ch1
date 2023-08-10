import styled from 'styled-components';

export const StyledStar = styled.div`
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.primaryColor};
`;