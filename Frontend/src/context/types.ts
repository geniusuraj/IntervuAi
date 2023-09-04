export interface ITodo {
    id: number;
    title: string;
    description: string;
    status: boolean;
  }
  export type TodoContextType = {
    todos: ITodo[];
    saveTodo: (todo: ITodo) => void;
    updateTodo: (id: number) => void;
  };