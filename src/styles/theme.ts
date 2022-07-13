import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    fonts: {
        body: `'Poppins', sans-serif`
    },
    styles: {
        global: {
            body: {
                bg: '#F5F8FA'
            }
        }
    }
});

export default theme;