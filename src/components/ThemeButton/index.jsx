import React from 'react'
import { StyledButton } from "../../atoms";
import { useTheme } from "../../utils/hooks/useTheme";

function ThemeButton() {

    const { theme, switchTheme } = useTheme()

    return (
        <>
            <StyledButton isDarkMode={theme === 'dark'} onClick={() => switchTheme()}>
                switch
            </StyledButton>
        </>
    )
}

export default ThemeButton