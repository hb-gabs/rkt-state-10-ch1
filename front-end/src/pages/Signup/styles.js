import styled from 'styled-components';

export const StyledSignup = styled.div`
  display: grid;
  grid-template-areas: "content bg";
  grid-template-columns: 40% 60%;
  height: 100vh;

  @media (max-width: 1000px) {
    grid-template-columns: 50% 50%;
  }

  @media (max-width: 800px) {
    grid-template-areas:
    "bg"
    "content";
    grid-template-columns: 1fr;
    grid-template-rows: 150px auto;
  }
`;

export const StyledContent = styled.div`
  display: flex;
  justify-content: center;
  grid-area: content;

  h1 {
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    color: grey;
    margin-bottom: 3rem;
  }

  h3 {
    color: white;
    margin-bottom: 3rem;
  }

  form {
    display: grid;
    gap: 1rem;
  }

  .btn {
    width: 100%;
  }
`;

export const StyledFormWrapper = styled.main`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledBackground = styled.div`
  grid-area: bg;
  overflow: hidden;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
