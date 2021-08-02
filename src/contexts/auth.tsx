import dayjs from 'dayjs';
import { useState, useCallback, useEffect } from 'react';
import { createContext, useContextSelector } from 'use-context-selector';

import Tmdb from '../services/tmdb';

interface UserData {
  id: number;
  username: string;
  name: string | null;
  avatar: {
    gravatar: {
      hash: string | null;
    };
    tmdb: {
      avatar_path: string | null;
    };
  };
}

interface TokenData {
  id: string;
  expires_at: string;
}

interface AuthContextData {
  user: UserData | null;
  token: TokenData | null;
  onLogout: () => void;
  onLogin: (username: string, password: string) => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<UserData | null>(() => {
    const localUser = localStorage.getItem('@flexrr:user');

    if (!localUser) {
      return;
    }

    return JSON.parse(localUser);
  });

  const [token, setToken] = useState<TokenData | null>(() => {
    const localToken = localStorage.getItem('@flexrr:token');

    if (!localToken) {
      return;
    }

    return JSON.parse(localToken);
  });

  const onLogin = useCallback(async (username: string, password: string) => {
    const requestTokenResponse = await Tmdb.getRequestToken();

    const loginResponse = await Tmdb.authentication(
      username,
      password,
      requestTokenResponse.request_token
    );

    if (loginResponse.success) {
      const sessionTokenResponse = await Tmdb.getSessionId(
        requestTokenResponse.request_token
      );

      const accountDetailsResponse = await Tmdb.getAccountDetails(
        sessionTokenResponse.session_id
      );

      const localTokenBody = {
        id: sessionTokenResponse.session_id,
        expires_at: requestTokenResponse.expires_at,
      };

      localStorage.setItem('@flexrr:token', JSON.stringify(localTokenBody));
      setToken(localTokenBody);

      localStorage.setItem('@flexrr:user', JSON.stringify(accountDetailsResponse));
      setUser(accountDetailsResponse);
    } else {
      throw new Error('Authentication error');
    }
  }, []);

  const onLogout = useCallback(() => {
    if (token) {
      Tmdb.deleteSession(token.id);
    }

    localStorage.removeItem('@flexrr:token');
    localStorage.removeItem('@flexrr:user');

    setToken(null);
    setUser(null);
  }, [token]);

  const verifyToken = useCallback(() => {
    if (!token) {
      return;
    }

    const hasTokenExpired = dayjs().isAfter(token.expires_at);

    if (hasTokenExpired) {
      return onLogout();
    }
  }, [token, onLogout]);

  useEffect(() => {
    verifyToken();
  }, [verifyToken]);

  return (
    <AuthContext.Provider value={{ user, token, onLogin, onLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContextSelector(AuthContext, (context) => context);

  return context;
}
