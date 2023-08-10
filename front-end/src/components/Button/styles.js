import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledButton = styled.button`
    background: ${({ theme }) => theme.colors.primary};
    border: none;
    cursor: pointer;
    color: ${({ theme }) =>  theme.colors.darkTextColor};
    font-size: 1rem;
    border-radius: .5rem;
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    ${({ centralize }) => centralize ? `
        justify-content: center;
    ` : `
        justify-content: space-between;
    `}
    gap: .5rem;

    &:hover {
        opacity: .8;
    }

    ${({ noBackground, theme }) => noBackground && `
        background: none;
        color: ${theme.colors.primary};
        width: fit-content;
        padding: 0;
    `}

    ${({ invert, theme }) => invert && `
        background: ${theme.colors.darkBackground};
        color: ${theme.colors.primary}
    `}
`;

export const StyledLink = styled(Link)`
    background: ${({ theme }) => theme.colors.primary};
    border: none;
    cursor: pointer;
    color: ${({ theme }) =>  theme.colors.darkTextColor};
    font-size: 1rem;
    border-radius: .5rem;
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    ${({ centralize }) => centralize ? `
        justify-content: center;
    ` : `
        justify-content: space-between;
    `}
    gap: .5rem;

    &:hover {
        opacity: .8;
    }

    ${({ noBackground, theme }) => noBackground && `
        background: none;
        color: ${theme.colors.primary};
        width: fit-content;
    `}

    ${({ invert, theme }) => invert && `
        background: ${theme.colors.darkBackground};
        color: ${theme.colors.primary}
    `}

    ${({ noPadding }) => noPadding && `
        padding: 0;
    `}
`;