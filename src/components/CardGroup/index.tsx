import Team from 'components/Team'
import * as S from './styles'

export type Team = {
  name: string
  flag: string
}

export type GroupData = {
  group: string
  teams: Team[]
}

export type CardGroupProps = {
  groupData: GroupData
  onClick?: () => void
}

const CardGroup = ({ groupData, onClick }: CardGroupProps) => {
  return (
    <S.Container>
      <S.Header>
        <h1>Group {groupData.group}</h1>
      </S.Header>
      <S.Teams>
        {groupData.teams.map((team) => (
          <Team key={team.name} flag={team.flag} team={team.name} />
        ))}
      </S.Teams>

      <S.Button onClick={onClick}> + </S.Button>
    </S.Container>
  )
}

export default CardGroup
