import React, { useState } from 'react';
import { ThemeContext } from './ThemeContext';
import Page from './Page';

function DarkMode() {
    const [isDark, setIsDark] = useState(true);

    return (
        <ThemeContext.Provider value={{ isDark, setIsDark }}>
            <Page />
        </ThemeContext.Provider>
    );
}

export default DarkMode;
