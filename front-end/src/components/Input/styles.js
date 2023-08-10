import styled from 'styled-components';

export const StyledInputContainer = styled.div`
    border-radius: .5rem;
    background: ${({ theme }) => theme.colors.lightBackground};
    padding: 1rem 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.primaryTextColor};
    width: 100%;
`;
    
export const StyledInput = styled.input`
    outline: none;
    background: none;
    border: none;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.primaryTextColor};
    width: 100%;
`;