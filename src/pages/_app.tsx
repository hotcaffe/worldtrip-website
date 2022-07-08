import { ChakraProvider } from "@chakra-ui/react"
import Header from "src/components/Header"
import theme from "src/styles/theme"

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Header/>
      <Component {...pageProps} />
    </ChakraProvider>
  ) 
}

export default MyApp
