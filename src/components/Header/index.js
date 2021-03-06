import { useHistory } from "react-router-dom";

import {
  StyledHeaderWrapper,
  StyledTabsWrapper,
  StyledButtonResponsive,
  StyledButtonNormal,
} from "./styled";

// este é o componente que renderiza o menu superior em todas as páginas da aplicação
// ele dá acesso às diferentes páginas

export const Header = (props) => {
  let history = useHistory();

  return (
    <StyledHeaderWrapper>
      <img alt="logomarca" src={"./Logo.svg"} />
      <StyledTabsWrapper>
        <button
          type="button"
          onClick={() => history.push("/")}
          style={{
            color: props.page === "Home" ? "#0400BF" : "#222222",
            fontWeight: props.page === "Home" ? "bold" : "normal",
          }}
        >
          Ínicio
        </button>
        <button
          type="button"
          onClick={() => history.push("/Quiz")}
          style={{
            color: props.page === "Quiz" ? "#0400BF" : "#222222",
            fontWeight: props.page === "Quiz" ? "bold" : "normal",
          }}
        >
          Quiz
        </button>
        <button
          type="button"
          onClick={() => history.push("/Recomendacoes")}
          style={{
            color: props.page === "Recomendacoes" ? "#0400BF" : "#222222",
            fontWeight: props.page === "Recomendacoes" ? "bold" : "normal",
          }}
        >
          Recomendações
        </button>
        <StyledButtonResponsive
          type="button"
          onClick={() => history.push("/Tunel")}
          style={{
            color: props.page === "Tunel" ? "#0400BF" : "#222222",
            fontWeight: props.page === "Tunel" ? "bold" : "normal",
          }}
        >
          Túnel
        </StyledButtonResponsive>
        <StyledButtonNormal
          type="button"
          onClick={() => history.push("/Tunel")}
          style={{
            color: props.page === "Tunel" ? "#0400BF" : "#222222",
            fontWeight: props.page === "Tunel" ? "bold" : "normal",
          }}
        >
          Túnel do tempo
        </StyledButtonNormal>
        <button
          type="button"
          onClick={() => history.push("/Sobre")}
          style={{
            color: props.page === "Sobre" ? "#0400BF" : "#222222",
            fontWeight: props.page === "Sobre" ? "bold" : "normal",
          }}
        >
          Sobre
        </button>
      </StyledTabsWrapper>
    </StyledHeaderWrapper>
  );
};

export default Header;
