export type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <header>Header</header>
      <main>{children} ola</main>
    </>
  )
}

export default Layout
