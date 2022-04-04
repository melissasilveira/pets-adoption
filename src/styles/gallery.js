import styled from 'styled-components'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'

export const PetGallery = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 5px;
  background: #e6bc7e;
`

export const Title = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  text-align: center;
  color: #333333;
`

export const Paragraph = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  text-align: center;
  padding: 5px 15px;
  color: #403423;
`

export const PetCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  align-content: space-between;
  padding: 20px 0px;
`

export const PetImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 10px;
  object-fit: cover;
`
export const StyledCard = styled(Card)`
  display: flex;
  width: 340px;
  background: #ffffff;
  box-shadow: 5px 5px 5px 2px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin: 20px;
`

export const CardContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  flex: 1;
`

export const CardData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  padding: 10px;
`

export const StyledTypography = styled(Typography)`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  color: #333333;
`

export const CardActions = styled.div`
  align-self: flex-end;
  justify-self: flex-end;
`
export const AdoptionImg = styled.img`
  width: 40px;
  height: 40px;
`
