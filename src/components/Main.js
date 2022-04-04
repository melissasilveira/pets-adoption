import React from 'react'
import {
  StyledContainer,
  StyledHeader,
  DogsBackground,
  TextBox,
  Title,
  Subtitle,
  StyledBody,
  StyledDiv,
  StyledH3,
  StyledH4,
  Paragraph,
  Footnote,
  StyledH5,
} from '../styles/main'

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

export default Main
