import styled from 'styled-components';

export const StyledTag = styled.div`
    background: ${({ theme }) => theme.colors.lightBackground};
    border-radius: .5rem;
    color: ${({ theme }) => theme.colors.primaryTextColor};
    padding: .5rem 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const StyledTagName = styled.p`
    font-size: .8rem;
`;