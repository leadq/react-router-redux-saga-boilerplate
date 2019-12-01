import './AppHeader.scss'

import React, { useState, useEffect } from 'react'
import { Layout, Button, Row, Col } from 'antd'
const { Header } = Layout

const AppHeader = ({ firstName = 'Deneme', lastName = 'Amca' }) => {
  const [fullName, setFullName] = useState(`${firstName} ${lastName}`)

  useEffect(() => {
    setFullName(`${firstName} ${lastName}`)
  }, [firstName, lastName])

  return (
    <React.Fragment>
      <Header id='appHeader'>
        <Row type='flex' justify='space-between'>
          <Col span={4}>
            <span className='header-app-name'>TO DO APPLICATION</span>
          </Col>
          <Col span={4}>
            <span>{`Hello ${fullName}`}</span>
          </Col>
          <Col span={1}>
            <Button type='primary' className='logout-button'>
              Logout
            </Button>
          </Col>
        </Row>
      </Header>
    </React.Fragment>
  )
}

export default AppHeader
