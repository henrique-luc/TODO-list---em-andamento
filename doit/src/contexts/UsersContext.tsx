import { AxiosResponse } from "axios";
import { createContext, ReactNode, useContext, useState } from "react";
import { api } from "../services/api";

interface UsersContextProps {
  children: ReactNode;
}

interface User {
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: { lat: string; lng: string };
  };
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
}

interface UsersContextData {
  users: User[];
}

const UsersContext = createContext<UsersContextData>({} as UsersContextData);

const useList = () => {
  const context = useContext(UsersContext);

  return context;
};

const UsersProvider = ({ children }: UsersContextProps) => {
  const [users, setUsers] = useState<User[]>([]);

  const loadUsers = () => {
    api
      .get("/users")
      .then((response: AxiosResponse) => {
        setUsers(response.data);
      })
      .catch((error) => console.log(error));
  };

  loadUsers();

  return (
    <UsersContext.Provider value={{ users }}>{children}</UsersContext.Provider>
  );
};

export { useList, UsersProvider, UsersContext };
