import Layout from 'components/Layout'
import React, { ReactElement } from 'react'
import GroupDetails from 'templates/GroupDetails'

const Group = () => {
  return <GroupDetails />
}

Group.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Layout>{page}</Layout>
    </>
  )
}
export default Group
