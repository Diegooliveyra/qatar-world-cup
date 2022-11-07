import CardGroup from 'components/CardGroup'
import Slider from 'components/Slider'

import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos'
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos'

import * as S from './styles'
import { useRouter } from 'next/router'

const HomepageTemplate = () => {
  const router = useRouter()
  const groupData = {
    group: 'A',
    id: 1,
    teams: [
      {
        name: 'Brazil',
        flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/125px-Flag_of_Brazil.svg.png'
      },
      {
        name: 'Serbia',
        flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Flag_of_Serbia.svg/125px-Flag_of_Serbia.svg.png'
      },
      {
        name: 'Switzerland',
        flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Switzerland.svg/125px-Flag_of_Switzerland.svg.png'
      },
      {
        name: 'Cameroon',
        flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Flag_of_Cameroon.svg/125px-Flag_of_Cameroon.svg.png'
      }
    ]
  }

  const settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <ArrowRight aria-label="next group" />,
    prevArrow: <ArrowLeft aria-label="previous group" />,
    responsive: [
      {
        breakpoint: 1375,
        settings: {
          arrows: false,
          slidesToShow: 3.2
        }
      },
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          slidesToShow: 2.2
        }
      },
      {
        breakpoint: 570,
        settings: {
          arrows: false,
          slidesToShow: 1.2
        }
      },
      {
        breakpoint: 375,
        settings: {
          arrows: false,
          slidesToShow: 1.1
        }
      }
    ]
  }
  return (
    <S.Container>
      <Slider settings={settings}>
        <div>
          <CardGroup
            groupData={groupData}
            onClick={() => router.push(`/group/${groupData?.id}`)}
          />
        </div>
        <div>
          <CardGroup groupData={groupData} />
        </div>
        <div>
          <CardGroup groupData={groupData} />
        </div>
        <div>
          <CardGroup groupData={groupData} />
        </div>
        <div>
          <CardGroup groupData={groupData} />
        </div>
        <div>
          <CardGroup groupData={groupData} />
        </div>
        <div>
          <CardGroup groupData={groupData} />
        </div>
        <div>
          <CardGroup groupData={groupData} />
        </div>
      </Slider>
    </S.Container>
  )
}

export default HomepageTemplate
