import Team from 'components/Team'
import * as S from './styles'

const groupData = {
  name: 'Brazil',
  flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/125px-Flag_of_Brazil.svg.png'
}

const Match = () => {
  return (
    <S.Wrapper>
      <S.Header>
        <h2> AL BAYT</h2>
        <span>Encerrado</span>
      </S.Header>
      <S.Info>
        <Team team={groupData.name} flag={groupData.flag} />
        <S.Score>
          <p>2</p>
          <span>X</span>
          <p>1</p>
        </S.Score>
        <Team team={groupData.name} flag={groupData.flag} invertedFlag={true} />
      </S.Info>
      <S.Footer>
        <p>14 de novembro de 2022 ás 16:00h</p>
      </S.Footer>
    </S.Wrapper>
  )
}

export default Match
