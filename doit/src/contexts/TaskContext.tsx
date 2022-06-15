import { AxiosResponse } from "axios";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useParams } from "react-router-dom";
import { api } from "../services/api";

interface TaskContextProps {
  children: ReactNode;
}

interface Task {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface Id {
  id: string;
}

interface TaskContextData {
  usersTodo: Task[];
  getAllTasks: () => void;

  //createTask: (data: Task, accessToken: string) => Promise<void>;
}

const TaskContext = createContext<TaskContextData>({} as TaskContextData);

const useTasks = () => {
  const context = useContext(TaskContext);

  return context;
};

const TaskProvider = ({ children }: TaskContextProps) => {
  const [usersTodo, setUsersTodo] = useState<Task[]>([]);

  const params = useParams<Id>();
  const NumberId = Number(params.id);

  useEffect(() => {
    api
      .get(`users/${NumberId}/todos`)
      .then((response: AxiosResponse) => {
        setUsersTodo(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  // useEffect(() => {
  //   api
  //     .patch(`/todos/${usersTodo.id}`)
  //     .then((response: AxiosResponse) => {
  //       JSON.stringify({
  //         completed: response.data.completed
  //           ? (response.data.completed = false)
  //           : (response.data.completed = true),
  //       });
  //     })
  //     .catch((error) => console.log(error));
  // }, []);
  //
  //const [tasks, setTasks] = useState<Task[]>([]);
  //const createTask = useCallback(async (data: Task, accessToken: string) => {
  //  await api
  //    .post(`/users/${userId}/todos`, data, {
  //      headers: {
  //        "Content-type": "application/json; charset=UTF-8",
  //      },
  //    })
  //    .then((response: AxiosResponse<Task>) => {
  //      setTasks((oldTasks) => [...oldTasks, response.data]);
  //    })
  //    .catch((err) => console.log(err));
  //}, []);
  //
  //const searchTask = useCallback(
  //  async (taskTitle: string, acessToken: string) => {
  //    api.get();
  //  },
  //  []
  //);
  //
  //
  //  const
  //
  const getAllTasks = () => {};

  return (
    <TaskContext.Provider value={{ usersTodo, getAllTasks }}>
      {children}
    </TaskContext.Provider>
  );
};

export { useTasks, TaskProvider, TaskContext };
