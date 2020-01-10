import './LoginPage.scss'

import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Form, Icon, Input, Button } from 'antd'
import { requestLogin } from '../../services/auth/actions'

const LoginPage = ({ form, loggingIn, requestLogin }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    form.validateFields((err, values) => {
      if (!err) {
        const { username, password } = values
        console.log('Received values of form: ', values)
        requestLogin(username, password)
      }
    })
  }

  const { getFieldDecorator } = form
  return (
    <Form id="loginPageForm" onSubmit={handleSubmit}>
      <Form.Item>
        {getFieldDecorator('username', {
          rules: [{ required: true, message: 'Please input your username!' }],
        })(
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Username"
          />
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('password', {
          rules: [{ required: true, message: 'Please input your Password!' }],
        })(
          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Password"
          />
        )}
      </Form.Item>
      <Form.Item>
        <Button
          loading={loggingIn}
          type="primary"
          htmlType="submit"
          className="login-form-button"
        >
          Log in
        </Button>
        <Link className="register-now" to="/registration">
          register now!
        </Link>
      </Form.Item>
    </Form>
  )
}

const mapStateToProps = (state) => ({
  loggingIn: state.authReducer.loggingIn,
})

const mapDispatchToProps = {
  requestLogin,
}

const LoginForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form.create()(LoginPage))

export default LoginForm
