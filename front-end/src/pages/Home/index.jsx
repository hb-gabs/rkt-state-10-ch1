import { Button } from "../../components/Button";
import { GrAdd } from 'react-icons/gr';
import { Header } from "../../components/Header";
import { StyledContent, StyledContentBody, StyledContentHeader, StyledHeaderName } from "./styles";
import { Card } from "../../components/Card";
import { useState } from "react";
import { useEffect } from "react";
import { getMovies } from "../../services/movies/get-movies";

export const Home = () => {
    const [moviesData, setMoviesData] = useState([]);
    const [filteredMoviesData, setFilteredMoviesData] = useState([]);
    const [searchInput, setSearchInput] = useState("");

    const getAllMoviesData = async () => {
        const { data } = await getMovies();
        setMoviesData(data);
    }

    useEffect(() => {
        getAllMoviesData();
    }, []);

    useEffect(() => {
        if (searchInput) {
            setFilteredMoviesData(moviesData.filter(movie => 
                movie.title.toLowerCase().includes(searchInput.toLowerCase())));
            return;
        }
        setFilteredMoviesData(moviesData);
    }, [searchInput, moviesData])

    return (
        <>
            <Header
                searchInput={searchInput}
                setSearchInput={setSearchInput}
            />
            <StyledContent>
                <StyledContentHeader>
                    <StyledHeaderName>
                        Meus filmes
                    </StyledHeaderName>
                    <Button
                        text="Adicionar filme"
                        isLink
                        icon={GrAdd}
                        to="/movie/new"
                    />
                </StyledContentHeader>
                <StyledContentBody>
                    {filteredMoviesData.length !== 0 && filteredMoviesData?.map(movie => (
                        <Card data={movie} />
                    ))}
                    {filteredMoviesData.length === 0 && (
                        searchInput ? (
                            <p>Não há filmes com esse título.</p>
                        ) : (
                            <p>Não há filmes para exibir.</p>
                        )
                    )}
                </StyledContentBody>
            </StyledContent>
        </>
    );
}