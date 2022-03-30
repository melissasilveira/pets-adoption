import styled from '@emotion/styled'
import React from 'react'

function Main() {
  return (
    <StyledContainer>
      <StyledHeader>
        <DogsBackground src="/images/background.png" alt="dogs" />
        <TextBox>
          <Title>Adote e salve uma vida</Title>
          <Subtitle>Um gesto de carinho que pode salvar vidas.</Subtitle>
        </TextBox>
      </StyledHeader>
      <StyledBody>
        <StyledDiv>
          <StyledH3>Por que adotar?</StyledH3>
          <StyledH4>Adoção salva a vida de um animal</StyledH4>
          <Paragraph>
            Adoção salva a vida de um animal Adotar um animal é uma grande
            responsabilidade, e não é só porque você precisará cuidar dele em
            casa. A adoção é capaz de salvar a vida de um bichinho que poderia
            estar nas ruas, abandonado, morrendo de fome e possivelmente
            sofrendo de maus tratos. A maioria das ONGs e clínicas veterinárias
            não podem sustentar um animal por muito tempo, não tendo condições
            de manter a quantidade de cães e gatos desabrigados que
            frequentemente recebem. Além de levar um novo companheiro para a
            casa, você está salvando a vida de um grande amigo e dando a ele a
            oportunidade de receber amor em um lar seguro.
          </Paragraph>
          <Footnote>Fonte: https://www.casapraticaqualita.com.br/</Footnote>
        </StyledDiv>
        <StyledDiv>
          <StyledH3>3 Motivos para adotar</StyledH3>
          <StyledH5>1 - Não vai faltar amor</StyledH5>
          <Paragraph>
            Acredite: adotar um animalzinho muda completamente a vida de alguém.
            E o amor que eles nos dão é tão grande que fica até difícil
            retribuir à altura!
          </Paragraph>
          <StyledH5>2 - Diminui o estresse</StyledH5>
          <Paragraph>
            Você sabia que adotar um animalzinho ajuda a diminuir o estresse?
            Sim! Até nisso eles contribuem.
          </Paragraph>
          <StyledH5>3 - A melhor companhia</StyledH5>
          <Paragraph>
            Adotar um cachorro vai deixá-lo eternamente grato a você. Você vai
            ter a melhor companhia que poderia querer em todos os momentos!
          </Paragraph>
        </StyledDiv>
      </StyledBody>
    </StyledContainer>
  )
}

const DogsBackground = styled.img`
  display: none;
  @media only screen and (min-width: 480px) {
    display: flex;
    width: 550px;
    height: 311.49px;
    left: 95px;
    top: 90px;
  }
`
const StyledContainer = styled.div`
  background: #ffffff;
  display: flex;
  flex-direction: column;
  padding-top: 70px;
`
const StyledHeader = styled.div`
  height: 229px;
  background: #040404;
  @media only screen and (min-width: 480px) {
    height: 311.49px;
    display: flex;
  }
`
const TextBox = styled.div`
  @media only screen and (min-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
  }
`
const Title = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 150%;
  text-align: center;
  color: #e6bc7e;
  margin: 20px 60px;
  margin-bottom: 5px;
  @media only screen and (min-width: 480px) {
    font-size: 46px;
    line-height: 54px;
    padding-top: 50px;
    text-align: start;
    margin: 20px;
  }
`
const Subtitle = styled.h3`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 117%;
  text-align: center;
  color: #bf9d69;
  border: 1px solid #040404;
  margin: 0px 60px;
  @media only screen and (min-width: 480px) {
    text-align: left;
    margin: 0px;
    justify-self: left;
    margin-right: 30px;
    padding-right: 80px;
  }
`
const StyledBody = styled.div`
  @media only screen and (min-width: 480px) {
    display: flex;
    padding: 40px;
    justify-content: space-evenly;
  }
`
const StyledH4 = styled.h4`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-align: justify;
  padding: 1px 4px;
  color: #e6bc7e;
  @media only screen and (min-width: 480px) {
    padding: 10px 4px;
  }
`

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 20px;
  @media only screen and (min-width: 480px) {
    width: 500px;
    padding: 20px;
  }
`
const StyledH3 = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  color: #bf9d69;
  padding: 2px 4px;
  @media only screen and (min-width: 480px) {
    padding: 10px 4px;
  }
`
const Paragraph = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-align: justify;
  padding: 2px 4px;
  color: #403423;
`
const Footnote = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 9px;
  line-height: 11px;
  text-align: justify;
  padding: 0px 4px;
  color: #e6bc7e;
  @media only screen and (min-width: 480px) {
    padding: 10px 4px;
  }
`
const StyledH5 = styled.h5`
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  text-align: justify;
  padding: 2px 4px;
  color: #e6bc7e;
  @media only screen and (min-width: 480px) {
    padding: 10px 4px;
  }
`

export default Main
