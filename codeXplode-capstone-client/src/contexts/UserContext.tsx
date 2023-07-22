import React, { createContext, useEffect, useState } from 'react';

import axios from 'axios';

interface User {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
}

interface UserLogin {
  username: string;
  password: string;
}

export const UserContext = createContext<UserContextProps>({
  users: [],
  getAllUsers: () => Promise.resolve(),
  addUser: (user: User) => Promise.resolve(user),
  editUser: (user: User) => Promise.resolve(user),
  deleteUser: (id: number) => Promise.resolve(id),
  loginUser: (user: UserLogin) => Promise.resolve(user),
});

export interface UserContextProps {
  users: User[];
  getAllUsers: () => Promise<void>;
  addUser: (user: User) => Promise<User>;
  editUser: (user: User) => Promise<User>;
  deleteUser: (id: number) => Promise<number>;
  loginUser: (user: UserLogin) => Promise<any>;
}

interface UserProviderProps {
  children: React.ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [users, setUsers] = useState<User[]>([]);
  const baseUrl = 'http://localhost:3000/api/user';

//   useEffect(() => {
//     console.log('useEffect');
//     async function getUsers() {
//       await getAllUsers();
//     }
//     getUsers();
//   }, []);

  function loginUser(user: UserLogin): any {
    console.log('loginUser');
    return axios.post(`${baseUrl}/login`, user).then((response) => {
      return new Promise((resolve) => resolve(response.data.token));
    });
  }

  function getAllUsers() {
    return axios.get(baseUrl).then((response) => setUsers(response.data));
  }

  function addUser(user: any): Promise<User> {
    return axios.post(baseUrl, user).then((response) => {
      //getAllUsers();
      return new Promise((resolve) => resolve(response.data));
    });
  }

  function editUser(): Promise<User> {
    return axios.put(baseUrl).then((response) => {
      getAllUsers();
      return new Promise((resolve) => resolve(response.data));
    });
  }

  function deleteUser(id: number): Promise<number> {
    return axios.put(baseUrl + id).then((response) => {
      getAllUsers();
      return new Promise((resolve) => resolve(response.data));
    });
  }

  return (
    <UserContext.Provider
      value={{
        users,
        getAllUsers,
        addUser,
        editUser,
        deleteUser,
        loginUser,
      }}>
      {children}
    </UserContext.Provider>
  );
};
