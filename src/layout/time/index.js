import { useEffect, useState } from "react";
import { ImArrowRight2 } from "react-icons/im";
import { ImArrowLeft2 } from "react-icons/im";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import {
  StyledTimeWrapper,
  StyledDecadaWrapper,
  StyledDecadaText,
  StyledDecadaImg,
  StyledFooterWrapper,
} from "./styled";
import { Header } from "../../components/Header";
import { Dialog } from "../../components/Dialog";
import axios from "axios";

export const Time = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [decadasInfo, setDecadasInfo] = useState([]);

  useEffect(() => {
    axios
      .get("https://quecabeleiraeessa-com-br.umbler.net/api/v1/decada")
      .then((response) => {
        setDecadasInfo(response.data.data);
        console.log(response.data.data);
      })
      .catch((e) => console.log("A requisição do túnel do tempo falhou"));
  }, []);

  function currentDecada() {
    switch (tabIndex) {
      case 0:
        return "1910";
      case 1:
        return "1920";
      case 2:
        return "1930";
      case 3:
        return "1940";
      case 4:
        return "1950";
      case 5:
        return "1960";
      case 6:
        return "1970";
      case 7:
        return "1980";
      case 8:
        return "1990";
      case 9:
        return "2000";
      case 10:
        return "2010";
      case 11:
        return "2020";
      default:
        return "Hoje";
    }
  }


  function nextDecada() {
    if (tabIndex !== 11) {
      setTabIndex(tabIndex + 1);
    }
  }

  const styledSelected = {
    color: "#0400BF",
    fontSize: "0",
    border: "none",
    borderRadius: "50%",
    background: "#0400BF",
    width: "22px",
    height: "22px",
    marginRight: "2rem",
  };
  const styledNormal = {
    color: "#FFC0B2",
    fontSize: "0",
    border: "none",
    borderRadius: "50%",
    background: "#FFC0B2",
    width: "22px",
    height: "22px",
    marginRight: "2rem",
  };

  return (
    <StyledTimeWrapper>
      <Header page="Tunel" />
      <h1>{currentDecada()}</h1>
      {decadasInfo[0] !== undefined && (
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList
            style={{
              border: "none",
              background: "none",
            }}
          >
            <Tab style={tabIndex === 0 ? styledSelected : styledNormal}></Tab>
            <Tab style={tabIndex === 1 ? styledSelected : styledNormal}></Tab>
            <Tab style={tabIndex === 2 ? styledSelected : styledNormal}></Tab>
            <Tab style={tabIndex === 3 ? styledSelected : styledNormal}></Tab>
            <Tab style={tabIndex === 4 ? styledSelected : styledNormal}></Tab>
            <Tab style={tabIndex === 5 ? styledSelected : styledNormal}></Tab>
            <Tab style={tabIndex === 6 ? styledSelected : styledNormal}></Tab>
            <Tab style={tabIndex === 7 ? styledSelected : styledNormal}></Tab>
            <Tab style={tabIndex === 8 ? styledSelected : styledNormal}></Tab>
            <Tab style={tabIndex === 9 ? styledSelected : styledNormal}></Tab>
            <Tab style={tabIndex === 10 ? styledSelected : styledNormal}></Tab>
            <Tab style={tabIndex === 11 ? styledSelected : styledNormal}></Tab>
          </TabList>

          <TabPanel>
            <StyledDecadaWrapper>
              <StyledDecadaText>
                <h2>{decadasInfo[0].descricao}</h2>
              </StyledDecadaText>
              <StyledDecadaImg src={decadasInfo[0].imagem} />
            </StyledDecadaWrapper>
          </TabPanel>

          <TabPanel>
            {" "}
            <StyledDecadaWrapper>
              <StyledDecadaText>
                <h2>{decadasInfo[1].descricao}</h2>
              </StyledDecadaText>
              <StyledDecadaImg src={decadasInfo[1].imagem} />
            </StyledDecadaWrapper>
          </TabPanel>
          <TabPanel>
            {" "}
            <StyledDecadaWrapper>
              <StyledDecadaText>
                <h2>{decadasInfo[2].descricao}</h2>
              </StyledDecadaText>
              <StyledDecadaImg src={decadasInfo[2].imagem} />
            </StyledDecadaWrapper>
          </TabPanel>

          <TabPanel>
            {" "}
            <StyledDecadaWrapper>
              <StyledDecadaText>
                <h2>{decadasInfo[3].descricao}</h2>
              </StyledDecadaText>
              <StyledDecadaImg src={decadasInfo[3].imagem} />
            </StyledDecadaWrapper>
          </TabPanel>
          <TabPanel>
            {" "}
            <StyledDecadaWrapper>
              <StyledDecadaText>
                <h2>{decadasInfo[4].descricao}</h2>
              </StyledDecadaText>
              <StyledDecadaImg src={decadasInfo[4].imagem} />
            </StyledDecadaWrapper>
          </TabPanel>

          <TabPanel>
            {" "}
            <StyledDecadaWrapper>
              <StyledDecadaText>
                <h2>{decadasInfo[5].descricao}</h2>
              </StyledDecadaText>
              <StyledDecadaImg src={decadasInfo[5].imagem} />
            </StyledDecadaWrapper>
          </TabPanel>
          <TabPanel>
            {" "}
            <StyledDecadaWrapper>
              <StyledDecadaText>
                <h2>{decadasInfo[6].descricao}</h2>
              </StyledDecadaText>
              <StyledDecadaImg src={decadasInfo[6].imagem} />
            </StyledDecadaWrapper>
          </TabPanel>

          <TabPanel>
            {" "}
            <StyledDecadaWrapper>
              <StyledDecadaText>
                <h2>{decadasInfo[7].descricao}</h2>
              </StyledDecadaText>
              <StyledDecadaImg src={decadasInfo[7].imagem} />
            </StyledDecadaWrapper>
          </TabPanel>
          <TabPanel>
            {" "}
            <StyledDecadaWrapper>
              <StyledDecadaText>
                <h2>{decadasInfo[8].descricao}</h2>
              </StyledDecadaText>
              <StyledDecadaImg src={decadasInfo[8].imagem} />
            </StyledDecadaWrapper>
          </TabPanel>

          <TabPanel>
            {" "}
            <StyledDecadaWrapper>
              <StyledDecadaText>
                <h2>{decadasInfo[9].descricao}</h2>
              </StyledDecadaText>
              <StyledDecadaImg src={decadasInfo[9].imagem} />
            </StyledDecadaWrapper>
          </TabPanel>
          <TabPanel>
            {" "}
            <StyledDecadaWrapper>
              <StyledDecadaText>
                <h2>{decadasInfo[10].descricao}</h2>
              </StyledDecadaText>
              <StyledDecadaImg src={decadasInfo[10].imagem} />
            </StyledDecadaWrapper>
          </TabPanel>

          <TabPanel>
            {" "}
            <StyledDecadaWrapper>
              <StyledDecadaText>
                <h2>{decadasInfo[11].descricao}</h2>
              </StyledDecadaText>
              <StyledDecadaImg src={decadasInfo[11].imagem} />
            </StyledDecadaWrapper>
          </TabPanel>
        </Tabs>
      )}
      <StyledFooterWrapper>
        <button
          type="button"
          onClick={() => nextDecada()}
          style={{ display: tabIndex === 0 ? "none" : "" }}
        >
          <ImArrowLeft2 style={{ marginLeft: "4px", minWidth: "22px" }} />
          Anterior
        </button>
        <button
          type="button"
          style={{ display: tabIndex === 0 ? "none" : "" }}
          onClick={() => nextDecada()}
        >
          Próximo
          <ImArrowRight2 style={{ marginLeft: "4px", minWidth: "22px" }} />
        </button>
      </StyledFooterWrapper>
    </StyledTimeWrapper>
  );
};

export default Time;
