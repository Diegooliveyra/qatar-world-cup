/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { ReactSVG } from 'react-svg'
import * as S from './styles'

const Header = () => {
  return (
    <S.Container>
      <img src="/img/logo.png" alt="Logo Qatar World Cup" />

      <S.Nav>
        <ul>
          <li>Group stage</li>
          <li>Knockout stage</li>
          <li>Stadiuns</li>
        </ul>
      </S.Nav>

      <S.Wrapper>
        <Link href="" passHref>
          <a>
            <ReactSVG src="/icons/logo-github.svg" />
          </a>
        </Link>
        <Link href="" passHref>
          <a>
            <ReactSVG src="/icons/logo-linkedin.svg" />
          </a>
        </Link>
      </S.Wrapper>
    </S.Container>
  )
}

export default Header
