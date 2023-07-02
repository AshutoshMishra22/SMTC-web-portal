import { ThemeProvider } from 'styled-components';
import { AppDiv } from './appStyle';
import { theme } from './utils/common';
import BaseComponent from './container';
function App() {
	return (
		<ThemeProvider theme={theme}>
			<AppDiv>
				<BaseComponent />
			</AppDiv>
		</ThemeProvider>
	);
}

export default App;
