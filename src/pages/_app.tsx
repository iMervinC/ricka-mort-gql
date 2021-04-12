import { AppProps } from 'next/app'
import { client } from '@/utils/appolo'
import { ApolloProvider } from '@apollo/client/react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
