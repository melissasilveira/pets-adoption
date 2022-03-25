import styled from '@emotion/styled'
import React from 'react'

function Main() {
  return (
    <StyledContainer>
      <StyledHeader>
        <DogsBackground src="/images/background.png" alt="dogs" />
        <Title>Adote e salve uma vida</Title>
        <Subtitle>Um gesto de carinho que pode salvar vidas.</Subtitle>
      </StyledHeader>
      <div>
        <h3>Por que adotar?</h3>
        <p>
          Adoção salva a vida de um animal Adotar um animal é uma grande
          responsabilidade, e não é só porque você precisará cuidar dele em
          casa. A adoção é capaz de salvar a vida de um bichinho que poderia
          estar nas ruas, abandonado, morrendo de fome e possivelmente sofrendo
          de maus tratos. A maioria das ONGs e clínicas veterinárias não podem
          sustentar um animal por muito tempo, não tendo condições de manter a
          quantidade de cães e gatos desabrigados que frequentemente recebem.
          Além de levar um novo companheiro para a casa, você está salvando a
          vida de um grande amigo e dando a ele a oportunidade de receber amor
          em um lar seguro.
        </p>
        <h3>3 Motivos para adotar</h3>
        <h5>1 - Não vai faltar amor</h5>
        <p>
          Acredite: adotar um animalzinho muda completamente a vida de alguém. E
          o amor que eles nos dão é tão grande que fica até difícil retribuir à
          altura!
        </p>
        <h5>2 - Diminui o estresse</h5>
        <p>
          Você sabia que adotar um animalzinho ajuda a diminuir o estresse? Sim!
          Até nisso eles contribuem.
        </p>
        <h5>3 - A melhor companhia</h5>
        <p>
          Adotar um cachorro vai deixá-lo eternamente grato a você. Você vai ter
          a melhor companhia que poderia querer em todos os momentos!
        </p>
      </div>
    </StyledContainer>
  )
}

const DogsBackground = styled.img`
  display: none;
`
const StyledContainer = styled.div`
  background: #ffffff;
  display: flex;
  flex-direction: column;
`
const StyledHeader = styled.div`
  height: 229px;
  background: #040404;
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
`

export default Main
