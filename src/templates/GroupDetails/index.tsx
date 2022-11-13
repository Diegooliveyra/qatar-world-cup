import GroupTable from 'components/GroupTable'
import Slider from 'components/Slider'
import * as S from './styles'

import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos'
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos'
import Match from 'components/ Match'

const GroupDetails = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <ArrowRight aria-label="next group" />,
    prevArrow: <ArrowLeft aria-label="previous group" />
    // responsive: [
    //   {
    //     breakpoint: 1375,
    //     settings: {
    //       arrows: false,
    //       slidesToShow: 3.2
    //     }
    //   },
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       arrows: false,
    //       slidesToShow: 2.2
    //     }
    //   },
    //   {
    //     breakpoint: 570,
    //     settings: {
    //       arrows: false,
    //       slidesToShow: 1.2
    //     }
    //   },
    //   {
    //     breakpoint: 375,
    //     settings: {
    //       arrows: false,
    //       slidesToShow: 1.1
    //     }
    //   }
    // ]
  }

  return (
    <S.Container>
      <S.Wrapper>
        <GroupTable />
      </S.Wrapper>
      <S.Wrapper>
        <Slider settings={settings}>
          <div>
            <Match />
            <Match />
          </div>

          <div>
            <Match />
            <Match />
          </div>

          <div>
            <Match />
            <Match />
          </div>

          <div>
            <Match />
            <Match />
          </div>
        </Slider>
      </S.Wrapper>
    </S.Container>
  )
}

export default GroupDetails
