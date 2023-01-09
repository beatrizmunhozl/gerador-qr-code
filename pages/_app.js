import AppContext from '../src/Context'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {

  return (
    <AppContext>
      <main>
        <Component {...pageProps} />
      </main>
    </AppContext>
    )
}
