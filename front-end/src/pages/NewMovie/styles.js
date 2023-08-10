import styled from 'styled-components';
import { Section } from '../../components';

export const StyledNewMovie = styled.div`
    padding: 0 10rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
`;

export const StyledPageName = styled.h1`
    color: ${({ theme }) => theme.colors.primaryTextColor};
    font-weight: bold;
    font-size: 2rem;
`;

export const StyledMarkersWrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.darkBackground};
    padding: 1rem;
    border-radius: 1rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
`; 

export const StyledWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    > * {
        width: 100%;
    }
`;
