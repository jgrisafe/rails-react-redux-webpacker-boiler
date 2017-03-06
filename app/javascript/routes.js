import HomeRoute from './routes/HomeRoute'
import PageWrapper from './containers/PageWrapper'


export default {
  // Application container component
  component: PageWrapper,
  childRoutes: [
    { path: '/',
      getComponent: (nextState, cb) => {
        require.ensure([], (require) => {
          cb(null, require('./containers/Home').default)
        })
      },
    }
  ],
}