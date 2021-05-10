import { ThemeProvider } from 'styled-components';

import Routes from './routes';

import { GlobalStyle } from './styles/GlobalStyles';
import theme from '../src/styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
