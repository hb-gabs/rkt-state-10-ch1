import styled from 'styled-components';

export const StyledMarker = styled.div`
    border-radius: 1rem;
    background: ${({ theme }) => theme.colors.lightBackground};
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: .5rem;

    ${({ isEmpty, theme }) => isEmpty && `
        background: ${theme.colors.mediumBackground};
        border: 2px dashed ${theme.colors.lightBackground};
        color: ${theme.colors.lightBackground};
        padding: .5rem;
    `}
`;

export const StyledMarkerName = styled.p`
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.primaryTextColor};
`;