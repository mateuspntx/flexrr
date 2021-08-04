import { useRef, useState } from 'react';
import { useHistory } from 'react-router';
import { Redirect } from 'react-router-dom';
import SyncLoader from 'react-spinners/SyncLoader';

import { useAuth } from '../../contexts/auth';

import useDocumentTitle from '../../hooks/useDocumentTitle';

import Layout from '../../components/Layout';
import ErrorMessage from '../../components/ErrorMessage';

import * as S from './styles';

const LoginPage = () => {
  const { token, onLogin } = useAuth();
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const formRef = useRef<any>();

  useDocumentTitle(`Login - Flexrr`);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const [username, password] = formRef.current;

    try {
      setIsLoading(true);

      await onLogin(username.value, password.value);

      history.push('/watchlist');
    } catch {
      setError(true);
      setIsLoading(false);
    }
  };

  return (
    <>
      {token && <Redirect to="/watchlist" />}

      <Layout>
        <S.Container>
          <S.Header>
            <h1>Login</h1>
            <p>Do login using your credentials from TMDb</p>
          </S.Header>

          {error && (
            <ErrorMessage>
              Incorrect username or password. Try again or reset your password in{' '}
              <a
                href="https://www.themoviedb.org/reset-password"
                rel="noreferrer"
                target="_blank"
              >
                TMDb's website.
              </a>
            </ErrorMessage>
          )}

          <form ref={formRef} onSubmit={handleSubmit}>
            <S.StyledInput
              type="text"
              name="username"
              placeholder="Username"
              required
              autoFocus
            />
            <S.StyledInput
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <S.StyledButton type="submit" disabled={isLoading}>
              {!isLoading ? 'Login' : <SyncLoader size={8} />}
            </S.StyledButton>
          </form>

          <S.Footer>
            <p>Don't have an account yet?</p>
            <a href="https://www.themoviedb.org/signup" rel="noreferrer" target="_blank">
              Join TMDb
            </a>
          </S.Footer>
        </S.Container>
      </Layout>
    </>
  );
};

export default LoginPage;
