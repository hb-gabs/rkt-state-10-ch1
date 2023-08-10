import styled from 'styled-components';

export const StyledProfile = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const StyledHeader = styled.header`
    height: 150px;
    width: 100%;
    background: ${({ theme }) => theme.colors.primaryBackground};
    display: flex;
    align-items: center;
    padding: 0 10rem;
`;

export const StyledImageWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;

    .photo-input {
        z-index: 100;
        position: relative;
        border-radius: 50%;
        width: 3rem;
        height: 3rem;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;

        > * {
            position: absolute;
            width: auto;
        }
        background: ${({ theme }) => theme.colors.primary};

        input {
            border-radius: 50%;
            width: 3rem;
            height: 7rem;
            position: absolute;
            opacity: 0;
            cursor: pointer;
        }
    }
`;

export const StyledInputWrapper = styled.div`
    position: absolute;
    left: 45px;
    top: 35px;
`;

export const StyledImage = styled.img`
    border-radius: 50%;
    width: 12rem;
    height: 12rem;
    object-fit: cover;
    position: absolute;
    top: -6rem;
    z-index: 99;
`;

export const StyledForm = styled.form`
    display: grid;
    gap: 2rem;
    margin-top: 10rem;
`;