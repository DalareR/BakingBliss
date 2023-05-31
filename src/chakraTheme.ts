import { ThemeConfig, extendTheme } from "@chakra-ui/react";

const colors = {
    brand: {
        50: '#ffefe5',
        100: '#fbd1b8',
        200: '#fab287',
        300: '#fa9455',
        400: '#fa7527',
        500: '#e15c13',
        600: '#af480d',
        700: '#7d3408',
        800: '#4b1f05',
        900: '#1a0a00'
    }
}

const config: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: false
}

const styles = {
    global : {
        body: {
            fontFamily: `Nanum Gothic, sans-serif`
        }
    }
}

export const chakraTheme = extendTheme({colors, config, styles})