//extendTheme is the function to customize the default Chakra theme.
import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    colors: { //I'm overwriting all the gray's tones. I could do it with any default Chakra color.
        gray: {
            "900": "#181B23",
            "800": "#1F2029",
            "700": "#353646",
            "600": "#4B4D63",
            "500": "#616480",
            "400": "#797D9A",
            "300": "#9699B0",
            "200": "#B3B5C6",
            "100": "#D1D2DC",
            "50": "#EEEEF2",
        }
    },
    fonts: {
        heading: 'Roboto',
        body: 'Roboto'
    },
    styles: {
        global: {
            body: {
                bg: 'gray.900', //These colors are provided by Chakra itself. If necessary, can be consulted on docs. 
                color: 'gray.50'
            }
        }
    }
})