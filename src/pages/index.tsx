import Layout from 'components/Layout'
import { ReactElement } from 'react'
import HomepageTemplate from 'templates/Home'

const Home = () => {
  return <HomepageTemplate />
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Layout>{page}</Layout>
    </>
  )
}

export default Home
