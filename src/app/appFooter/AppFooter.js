import './AppFooter.scss'

import React from 'react'
import { Layout } from 'antd'
const { Footer } = Layout

const AppFooter = () => {
  return (
    <React.Fragment>
      <Footer id='appFooter'>
        <span>All Rights Reserved</span>
      </Footer>
    </React.Fragment>
  )
}

export default AppFooter
