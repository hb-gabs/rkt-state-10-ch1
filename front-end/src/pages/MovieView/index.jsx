import { StyledActionsWrapper, StyledCreationTime, StyledCreator, StyledDescription, StyledImage, StyledMovieTitle, StyledMovieView, StyledTagsWrapper, StyledWrapper } from "./styles";
import { Button, Header, Stars, Tag } from '../../components/index';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { CiClock2 } from 'react-icons/ci';
import profileImg from '../../assets/user-img.svg';
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getOneMovie } from "../../services/movies/get-one-movie";
import { useAuth } from "../../hooks";
import { api } from "../../services/api";
import placeholderImg from '../../assets/avatar_placeholder.svg';
import { BsFillTrashFill } from 'react-icons/bs';
import { deleteMovie } from "../../services/movies/delete-movie";

export const MovieView = () => {
  const { id } = useParams();
  const [movieData, setMoviesData] = useState();
  const navigate = useNavigate();

  const avatar = movieData?.avatar
  ? `${api.defaults.baseURL}/files/${movieData?.avatar}`
  : placeholderImg;

  const getMovieData = async () => {
    const { data } = await getOneMovie({ id });
    
    if (!data) return;

    setMoviesData(data);
  }

  const handleDelete = async () => {
    const confirm = window.confirm('Deseja excluir esse filme?');

    if (!confirm) return;

    const response = await deleteMovie({ id });
    if (response) {
      alert('Filme deletado com sucesso!');
      navigate('/');
    }
  }

  useEffect(() => {
    getMovieData();
  }, [])

  return (
    <>
      <Header />
      <StyledMovieView>
        <StyledActionsWrapper>
          <Button
            text="Voltar"
            icon={AiOutlineArrowLeft}
            noBackground
            onClick={() => navigate(-1)}
          />

          <Button
            text="Excluir filme"
            icon={BsFillTrashFill}
            invert
            onClick={handleDelete}
          />
        </StyledActionsWrapper>

        {!movieData && (
          <p>Filme não encontrado...</p>
        )}

        {movieData && (
          <>
          <StyledWrapper>
            <StyledMovieTitle>
              {movieData.title}
            </StyledMovieTitle>
            <Stars
              rating={movieData.rating}
              className="rating-stars"
            />
          </StyledWrapper>

          <StyledWrapper>
            <StyledImage
              src={avatar}
            />
            <StyledCreator>
              Por {movieData.creator}
            </StyledCreator>
            <CiClock2 className="clock-icon" />
            <StyledCreationTime>
              {movieData.created_at}
            </StyledCreationTime>
          </StyledWrapper>

          <StyledTagsWrapper>
            {movieData.tags.length !== 0 && movieData.tags?.map(tag => (
              <Tag name={tag.name} />
            ))}
            {movieData.tags.length === 0 && (
              <p>Não há Tags registradas.</p>
            )}
          </StyledTagsWrapper>

          <StyledDescription>
            {movieData.description}
          </StyledDescription>
          </>
        )}
      </StyledMovieView>
    </>
  );
}