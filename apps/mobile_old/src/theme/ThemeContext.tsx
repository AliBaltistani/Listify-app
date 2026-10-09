// ============================================================
// Listify — Theme Context (API-driven in future)
// ============================================================
import React, { createContext, useContext } from 'react';
import { theme, Theme } from './tokens';

const ThemeContext = createContext<Theme>(theme);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // TODO: In future, fetch theme from AppConfig API and merge with defaults
    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = (): Theme => {
    return useContext(ThemeContext);
};

export default ThemeContext;
