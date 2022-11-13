/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Team from 'components/Team'
import * as S from './styles'

const groupData = {
  name: 'Brazil',
  flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/125px-Flag_of_Brazil.svg.png'
}

export type GroupTableProps = {
  props?: any
}

const GroupTable = (props: GroupTableProps) => {
  return (
    <S.Container>
      <S.Header>
        <S.Grid columns="5fr repeat(8 , 1fr)">
          <h2>Group A</h2>
          <p>PTS</p>
          <p>PLD</p>
          <p>W</p>
          <p>L</p>
          <p>D</p>
          <p>GF</p>
          <p>GA</p>
          <p>GD</p>
        </S.Grid>
      </S.Header>

      <S.TeamWrapper isClassified={true}>
        <S.Grid columns="0.5fr 4fr repeat(8 , 1fr)">
          <span>1</span>
          <Team team={groupData.name} flag={groupData.flag} color={'primary'} />
          <p>0</p>
          <p>0</p>
          <p>0</p>
          <p>0</p>
          <p>0</p>
          <p>0</p>
          <p>0</p>
          <p>0</p>
        </S.Grid>
      </S.TeamWrapper>
      <S.TeamWrapper isClassified={true}>
        <S.Grid columns="0.5fr 4fr repeat(8 , 1fr)">
          <span>2</span>
          <Team team={groupData.name} flag={groupData.flag} color={'primary'} />
          <p>0</p>
          <p>0</p>
          <p>0</p>
          <p>0</p>
          <p>0</p>
          <p>0</p>
          <p>0</p>
          <p>0</p>
        </S.Grid>
      </S.TeamWrapper>
      <S.TeamWrapper isClassified={false}>
        <S.Grid columns="0.5fr 4fr repeat(8 , 1fr)">
          <span>3</span>
          <Team team={groupData.name} flag={groupData.flag} color={'primary'} />
          <p>0</p>
          <p>0</p>
          <p>0</p>
          <p>0</p>
          <p>0</p>
          <p>0</p>
          <p>0</p>
          <p>0</p>
        </S.Grid>
      </S.TeamWrapper>
      <S.TeamWrapper isClassified={false}>
        <S.Grid columns="0.5fr 4fr repeat(8 , 1fr)">
          <span>4</span>
          <Team team={groupData.name} flag={groupData.flag} color={'primary'} />
          <p>0</p>
          <p>0</p>
          <p>0</p>
          <p>0</p>
          <p>0</p>
          <p>0</p>
          <p>0</p>
          <p>0</p>
        </S.Grid>
      </S.TeamWrapper>
    </S.Container>
  )
}

export default GroupTable
