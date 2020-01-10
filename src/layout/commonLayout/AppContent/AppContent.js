import './AppContent.scss'

import React from 'react'
import { Layout } from 'antd'
const { Content } = Layout

const AppContent = ({ content: Component, componentProps = {} }) => {
  return (
    <React.Fragment>
      <Content id="appContent">
        {Component ? <Component {...componentProps} /> : 'HELLO CONTENT'}
      </Content>
    </React.Fragment>
  )
}

export default AppContent
