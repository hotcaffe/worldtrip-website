import { ChakraProvider } from "@chakra-ui/react"
import Head from "next/head"
import Header from "src/components/Header"
import theme from "src/styles/theme"
import "swiper/css/bundle";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>worldtrip</title>
      </Head>
      <Header/>
      <Component {...pageProps} />
    </ChakraProvider>
  ) 
}

export default MyApp
