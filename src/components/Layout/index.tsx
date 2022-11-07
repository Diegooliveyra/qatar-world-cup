import Header from 'components/Header'

export type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main style={{ height: '60vh' }}>{children}</main>
    </>
  )
}

export default Layout
