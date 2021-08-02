import { ThemeProvider } from 'styled-components';

import Routes from './routes';

import { AuthProvider } from './contexts/auth';
import { GlobalStyle } from './styles/GlobalStyles';
import theme from '../src/styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <GlobalStyle />
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
