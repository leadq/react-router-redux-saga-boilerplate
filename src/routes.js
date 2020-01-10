import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'

const routeMap = {
  homePage: {
    private: true,
    path: '/',
    component: HomePage,
    disableHeader: false,
    disableFooter: false,
  },
  login: {
    private: false,
    path: '/login',
    component: LoginPage,
  },
  registration: {
    private: false,
    path: '/registration',
    // component: RegistrationPage
  },
}

export default routeMap
