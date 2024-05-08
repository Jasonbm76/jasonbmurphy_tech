import React, { createContext, useState } from 'react';

interface ContextProps {
	lightTheme: boolean;
	toggleTheme: () => void;
}

export const ThemeContext = createContext<ContextProps>({
	lightTheme: true,
	toggleTheme: () => {},
});

interface Props {
	children?: React.ReactNode;
}

const ThemeProvider: React.FC<Props> = ({ children }) => {
	const [lightTheme, setLightTheme] = useState(true);

	const toggleThemeHandler = () => {
		setLightTheme((prevState) => !prevState);
	};

	return (
		<ThemeContext.Provider
			value={{
				lightTheme: lightTheme,
				toggleTheme: toggleThemeHandler,
			}}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
