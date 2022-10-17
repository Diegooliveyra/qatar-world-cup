import * as S from './styles'

export type TeamColor = 'primary' | 'secondary'

export type TeamProps = {
  team: string
  flag: string
  onlyFlag?: boolean
  invertedFlag?: boolean
  color?: TeamColor
}

const Team = ({
  team,
  flag,
  onlyFlag = false,
  invertedFlag = false,
  color = 'secondary'
}: TeamProps) => {
  return (
    <S.Container>
      <S.TeamFlag src={flag} invertedFlag={invertedFlag} />
      {!onlyFlag && <S.TeamName color={color}>{team}</S.TeamName>}
    </S.Container>
  )
}

export default Team
