const tokenExpireTime = 9999999999999999999

const fetchLogin = (username, password) => {
  console.log(username, password)
  const token = 'Bearer {FAKE-TOKEN}'
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve({ token, expireTime: tokenExpireTime })
    }, 1000)
  )
}

const fetchLogout = (token) => {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve({ status: 200 })
    }, 1000)
  )
}

const checkAuthentication = (token) => {
  console.log('checkAuthService', token)
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve({ token, expireTime: tokenExpireTime })
    }, 1000)
  )
}

export default {
  fetchLogin,
  checkAuthentication,
  fetchLogout,
}
