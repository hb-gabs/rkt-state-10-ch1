import styled from 'styled-components';

export const StyledHeader = styled.header`
    width: 100%;
    height: 100px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.lightBackground};
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 2rem;
    padding: 0 10rem;
`;

export const StyledName = styled.h1`
    font-weight: bold;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
`
