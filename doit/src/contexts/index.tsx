import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";
import { theme } from "../styles/theme";
import { UsersProvider } from "./UsersContext";
import { TaskProvider } from "./TaskContext";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => (
  <TaskProvider>
    <UsersProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </UsersProvider>
  </TaskProvider>
);
