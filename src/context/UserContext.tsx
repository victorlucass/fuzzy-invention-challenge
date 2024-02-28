import { ReactNode, createContext, useState } from "react";

interface ChildrenProps {
  children: ReactNode;
}

interface UserContextProps {
  credential: string;
  setCredential: (credential: string) => void;
  userData: any;
  setUserData: (userData: any) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  error: any;
  setError: (error: any) => void;
}

export const UserLoginContext = createContext({} as UserContextProps);

export function LoginContext({ children }: ChildrenProps) {
  const [credential, setCredential] = useState("");
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <UserLoginContext.Provider
      value={{
        credential,
        setCredential,
        userData,
        setUserData,
        loading,
        setLoading,
        error,
        setError,
      }}
    >
      {children}
    </UserLoginContext.Provider>
  );
}
