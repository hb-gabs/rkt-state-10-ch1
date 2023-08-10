import styled from 'styled-components';

export const StyledTextarea = styled.textarea`
    border-radius: .5rem;
    background: ${({ theme }) => theme.colors.lightBackground};
    padding: 1rem 1rem;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.primaryTextColor};
    width: 100%;
    outline: none;
    border: none;
    height: 300px;
    resize: none;
`;