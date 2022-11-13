import Header from 'components/Header'

import * as S from './styles'

export type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <S.Container>
      <Header />
      <main style={{ height: '60vh' }}>{children}</main>
    </S.Container>
  )
}

export default Layout
