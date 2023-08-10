import { Button, Input } from "../../components"
import { StyledContent, StyledSignin, StyledBackground, StyledFormWrapper } from "./styles"
import { AiOutlineMail, AiFillLock } from "react-icons/ai";
import backgroundSign from '../../assets/background.svg';
import { useAuth } from "../../hooks/auth/auth";
import { useFields } from "../../hooks/useFields/useFields";

export const Signin = () => {

  const { signin } = useAuth();
  const { fields, setNewFieldsFunction, checkFields } = useFields();

  const handleSignin = async e => {
    e.preventDefault();

    if (!checkFields()) {
      alert('Preencha os campos corretamente!');
      return;
    }

    await signin({
      data: fields,
    });
  }

  return(
    <StyledSignin>
      <StyledContent>
        <StyledFormWrapper>
          <h1>RocketMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir.</p>
          <h3>Faça seu login</h3>
          <form>
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
              text="Entrar"
              onClick={handleSignin}
            />
            <Button
              text="Criar conta"
              noBackground
              isLink
              className="btn"
              to="/signup"
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
    </StyledSignin>
  )
}