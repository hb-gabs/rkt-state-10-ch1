import { StyledWrapper, StyledMarkersWrapper, StyledNewMovie, StyledPageName } from "./styles";
import { Button, Header, Input, Marker, Section, Textarea } from '../../components/index';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useState } from "react";
import { createMovie } from "../../services/movies/create-movie";
import { useFields } from "../../hooks/useFields/useFields";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const NewMovie = () => {
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");
  const { fields, setNewFieldsFunction, setFields } = useFields();
  const navigate = useNavigate();

  const handleAddTag = () => {
    if (newTag) {
      setTags(prev => [...prev, newTag]);
    }
    setNewTag("");
  }

  const handleDeleteTag = (name) => {
    setTags(prev => prev.filter(tag => tag !== name));
  }

  const createNewMovie = async () => {

    if (newTag) {
      alert('Há uma tag que não foi salva!');
      return;
    }

    const response = await createMovie({ movieData: {
      title: fields.title,
      description: fields.description,
      rating: fields.rating,
      tags,
    }});

    if (response.status === 201) {
      navigate('/');
    }

  }

  useEffect(() => {
    if (fields.rating > 5 || fields.rating < 0) {
      setFields(prev => ({
        ...prev,
        rating: "",
      }));
    }
  }, [fields.rating])

  return (
    <>
      <Header />
      <StyledNewMovie>
        <Button 
          text="Voltar"
          icon={AiOutlineArrowLeft}
          noBackground
          onClick={() => navigate(-1)}
        />
        <StyledPageName>
          Novo filme
        </StyledPageName>
        
        <StyledWrapper>
          <Input
            placeholder="Título"
            value={fields.title}
            onChange={setNewFieldsFunction('title')}
          />
          <Input
            placeholder="Sua nota ( 0 a 5 )"
            type="number"
            value={fields.rating}
            onChange={setNewFieldsFunction('rating')}
          />
        </StyledWrapper>
        <Textarea
          placeholder="Observações"
          value={fields.description}
          onChange={setNewFieldsFunction('description')}
        />

        <Section
          title="Marcadores"
        >
          <StyledMarkersWrapper>
            {tags?.map((tag, index) => (
              <Marker
                key={index}
                name={tag}
                onDelete={() => handleDeleteTag(tag)}
              />
            ))}
            <Marker
              isEmpty
              value={newTag}
              onChange={e => setNewTag(e.target.value)}
              onAdd={handleAddTag}
            />
          </StyledMarkersWrapper>
        </Section>

        <StyledWrapper>
          <Button
            text="Excluir filme"
            invert
          />
          <Button
            text="Salvar alterações"
            onClick={createNewMovie}
          />
        </StyledWrapper>

      </StyledNewMovie>
    </>
  );
}