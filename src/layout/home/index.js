import { useHistory } from "react-router-dom";
import { StyledHomeWrapper, StyledHomeContent, StyledInfo, StyledHomeImg } from "./styled";
import { Header } from "../../components/Header";
import Principal from '../../assets/Principal.svg';

// esta é a primeira tela da aplicação, que dá o contexto sobre o tema e leva o usuário
// à realização do quiz

export const Home = () => {
  let history = useHistory();
  return (
    <>
      <StyledHomeWrapper>
        <Header page={"Home"} />
        <StyledHomeContent>
          <StyledInfo>
            <h1>Que cabeleira é essa?</h1>
            <h2>
              Diante de uma imensa diversidade de cabelos em nosso país: desde o
              mais liso até o mais crespo, neste espaço você tem a liberdade que
              precisa para explorar o tipo de cabelo que você possui e ainda
              saber como cuidar dele de maneira saudável e dinâmica. <strong> Vamos lá
              (re)descobrir essa cabeleira juntos? </strong>
            </h2>
            <button onClick={() => history.push("/Quiz")}>Iniciar minha jornada</button>
          </StyledInfo>
          <StyledHomeImg alt="boas-vindas" src={Principal}/>
        </StyledHomeContent>
      </StyledHomeWrapper>
    </>
  );
};

export default Home;
