import styled from 'styled-components';

export const StyledMovieView = styled.div`
    padding: 0 10rem;
    margin-top: 2rem;
    display: flex; 
    flex-direction: column;
    gap: 1rem;
    height: calc(100vh - 150px);
    overflow-y: auto;

    > p {
        color: grey;
    }
`;

export const StyledActionsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const StyledWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    .rating-stars {
        > * {
            font-size: 2rem;
        }
    }

    .clock-icon {
        color: ${({ theme }) => theme.colors.primary};
        font-size: 1.5rem;
    }
`;

export const StyledMovieTitle = styled.h1`
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.primaryTextColor};
`;

export const StyledCreator = styled.p`
    color: ${({ theme }) => theme.colors.primaryTextColor};
`;

export const StyledCreationTime = styled.p`
    color: ${({ theme }) => theme.colors.primaryTextColor};
`;

export const StyledTagsWrapper = styled.div`
    display: flex;
    gap: 1rem;

    > p {
        color: grey;
    }
`;

export const StyledDescription = styled.p`
    text-align: justify;
    color: ${({ theme }) => theme.colors.primaryTextColor};
`;

export const StyledImage = styled.img`
    border: 1px solid white;
    border-radius: 50%;
    width: 1.4rem;
    height: 1.4rem;
    object-fit: cover;
`;