import { createContext } from 'react';
// import { create } from 'zustand';

export const ThemeContext = createContext(null);

// const useThemeStore = create((set) => ({
//     isDark: true,
//     toggleTheme: () => set((state) => ({ isDark: !state.isDark })),
// }));

// export default useThemeStore;

// zustand 사용할 경우 DarkMode.jsx는 필요하지 않음.
// 최상위 컴포넌트(App)에서 바로 Page 렌더링하면 됨
