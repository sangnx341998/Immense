import { Provider } from 'react-redux'
import { store, wrapper } from '../src/store'
import '../styles/globals.css'

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default App
// option 2
// export default wrapper.withRedux(App)
