import { createContext } from "react";

interface IAdminContextProvider {
  children: React.ReactNode;
}

export const AdminContext = createContext({});



export const AdminContextProvider = ({ children }: IAdminContextProvider) => {
  return <AdminContext.Provider value={{}}>{children}</AdminContext.Provider>;
};
