
import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme' 

import { SidebarDrawerProvider } from '../contexts/SidebarDrawerContext'
import { makeServer } from '../services/mirage'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { queryClient } from '../services/queryClient'

if (process.env.NODE_ENV === 'development') {
  makeServer();
}

function MyApp({ Component, pageProps }: AppProps  ) {
  return (
    //It's necessary to wrapper the main APP component in the Chakra-UI context.
    //This allows that we use all the chakra themes.
    //resetCSS will remove all the default styles from HTML tags
    <ChakraProvider resetCSS theme={theme}> 
      <QueryClientProvider client={queryClient}>
        <SidebarDrawerProvider>
          <Component {...pageProps} />
        </SidebarDrawerProvider>

        <ReactQueryDevtools />
      </QueryClientProvider>
    </ChakraProvider>
  )
}

export default MyApp
