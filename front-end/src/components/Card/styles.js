import styled from 'styled-components';

export const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    background: ${({ theme }) => theme.colors.primaryBackground};
    padding: 1.5rem;
    border-radius: .5rem;
    margin: 1rem 0;
    gap: 1rem;
`;

export const StyledMovieTitle = styled.h2`
    font-weight: bold;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.primaryTextColor};
`;

export const StyledMovieDescription = styled.p`
    color: ${({ theme }) => theme.colors.secondaryTextColor};
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    line-clamp: 2;
    text-overflow: ellipsis;
    overflow: hidden;
    text-align: justify;
`;

export const StyledTagWrapper = styled.div`
    display: flex;
    gap: 1rem;
`;