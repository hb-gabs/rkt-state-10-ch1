import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledProfileContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    gap: 1rem;
`;

export const StyledProfileText = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    align-content: right;
`;

export const StyledUserName = styled.p`
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primaryTextColor};
    text-align: right;
    white-space: nowrap;
`;

export const StyledLogoutButton = styled.p`
    color: ${({ theme }) => theme.colors.secondaryTextColor};
    text-align: right;
    width: 100%;
`;


export const StyledUserImage = styled.img`
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.colors.secondaryTextColor};
    width: 4rem;
    height: 4rem;
    object-fit: cover;
    cursor: pointer;
`;