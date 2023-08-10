import { useNavigate } from "react-router-dom";
import { Input } from "../Input";
import { Profile } from "../Profile";
import { StyledHeader, StyledName } from "./styles";
import { AiOutlineSearch } from 'react-icons/ai';
import { useState } from "react";

export const Header = ({
    searchInput = "",
    setSearchInput = () => {},
}) => {
    const navigate = useNavigate();

    return (
        <StyledHeader>
            <StyledName onClick={() => navigate('/')}>
                RocketMovies
            </StyledName>
            <Input 
                placeholder='Pesquisar pelo título'
                icon={AiOutlineSearch}
                value={searchInput}
                onChange={e => setSearchInput(e.target.value)}
            />
            <Profile />
        </StyledHeader>
    );
}