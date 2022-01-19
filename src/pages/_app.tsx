
import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme' 

function MyApp({ Component, pageProps }: AppProps  ) {
  return (
    //It's necessary to wrapper the main APP component in the Chakra-UI context.
    //This allows that we use all the chakra themes.
    //resetCSS will remove all the default styles from HTML tags
    <ChakraProvider resetCSS theme={theme}> 
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
