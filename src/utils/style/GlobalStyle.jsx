import { useTheme } from "../hooks/useTheme";
import { createGlobalStyle } from 'styled-components'
import colors from './colors'

const StyledGlobalStyle = createGlobalStyle`
  * {
    font-family: "Trebuchet MS", Helvetica, serif;
  }
  
  body {
    background-color: ${({ isDarkMode }) => 
        isDarkMode ? colors.backgroundDark : colors.backgroundLight
    };
    
    transition: all .3s ease-in-out;
  }
`

function GlobalStyle() {
    const { theme } = useTheme()

    return <StyledGlobalStyle isDarkMode={theme === 'dark'} />
}

export default GlobalStyle