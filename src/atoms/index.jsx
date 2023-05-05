import styled from 'styled-components'
import colors from '../utils/style/colors'

export const StyledTitle = styled.h1`
  font-size: 4rem;
  color: blue;
  ${
    (props) => 
      props.$first && `
        color: red;
      `
  }
`

export const StyledButton = styled.button`
  width: 25px;
  aspect-ratio: 1/1;
  background: transparent;
  color: ${({isDarkMode}) => 
        isDarkMode ? colors.backgroundLight : colors.backgroundDark
    };
  border: 1px solid ${({isDarkMode}) =>
          isDarkMode ? colors.backgroundLight : colors.backgroundDark
  };
  border-radius: 8px;
`