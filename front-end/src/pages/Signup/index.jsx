import { Button, Input } from "../../components"
import { StyledContent, StyledSignup, StyledBackground, StyledFormWrapper } from "./styles"
import { AiOutlineMail, AiFillLock } from "react-icons/ai";
import backgroundSign from '../../assets/background.svg';
import { CgProfile } from 'react-icons/cg';
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signup } from "../../services/user/signup";
import { useFields } from "../../hooks/useFields/useFields";

export const Signup = () => {

  const { fields, setNewFieldsFunction, checkFields } = useFields();
  const navigate = useNavigate();

  const handleSignup = async e => {
    e.preventDefault();

    if (!checkFields()) {
      alert('Preencha os campos corretamente!');
      return;
    }

    const response = await signup({
      data: fields,
    });

    if (response.status === 201) {
      navigate('/');
    }
  }

  return(
    <StyledSignup>
      <StyledContent>
        <StyledFormWrapper>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h3>Crie sua conta</h3>
        <form>
          <Input
            placeholder="Nome"
            type="text"
            icon={CgProfile}
            value={fields.name}
            onChange={setNewFieldsFunction('name')}
          />
          <Input
            placeholder="Email"
            type="text"
            icon={AiOutlineMail}
            value={fields.email}
            onChange={setNewFieldsFunction('email')}
          />
          <Input
            placeholder="Senha"
            type="password"
            icon={AiFillLock}
            value={fields.password}
            onChange={setNewFieldsFunction('password')}
          />
          <Button
            className="btn"
            text="Cadastrar"
            onClick={handleSignup}
          />
          <Button
            text="Voltar para o login"
            noBackground
            className="btn"
            isLink
            to="/"
          />
        </form>
        </StyledFormWrapper>
      </StyledContent>
      <StyledBackground>
        <img
          src={backgroundSign}
          alt="Imagem do espaço interno de um a sala de cinema."
        />
      </StyledBackground>
    </StyledSignup>
  )
}