import SliderSlick, { Settings } from 'react-slick'
import * as S from './styles'

export type SliderSettings = Settings

export type SliderProps = {
  children: React.ReactNode
  settings: SliderSettings
}

const Slider = ({ children, settings }: SliderProps) => {
  return (
    <S.Wrapper>
      <SliderSlick {...settings}>{children}</SliderSlick>
    </S.Wrapper>
  )
}

export default Slider
