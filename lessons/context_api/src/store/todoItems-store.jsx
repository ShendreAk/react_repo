import { createContext } from "react";

export const TodoItemsContext = createContext({ toDoItems: [], addItems: () => { }, deleteItems: () => { } });