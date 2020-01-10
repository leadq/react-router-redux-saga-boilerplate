import './CommonLayout.scss'

import React from 'react'
import { Layout } from 'antd'
import AppHeader from './commonLayout/AppHeader'
import AppContent from './commonLayout/AppContent'
import AppFooter from './commonLayout/AppFooter'

const CommonLayout = ({
  content,
  disableHeader,
  disableFooter,
  ...componentProps
}) => {
  return (
    <Layout id="mainLayout">
      {!disableHeader && <AppHeader />}
      <AppContent content={content} componentProps={componentProps} />
      {!disableFooter && <AppFooter />}
    </Layout>
  )
}

export default CommonLayout
