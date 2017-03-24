import HomeRoute from './routes/HomeRoute'
import PageWrapper from './containers/PageWrapper'


export default {
  // Application container component
  component: PageWrapper,
  childRoutes: [
    HomeRoute
  ],
}