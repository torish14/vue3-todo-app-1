import { DeepReadonly } from 'vue'

export type Status = 'waiting' | 'working' | 'completed' | 'pending'

export interface Todo {
  id: number
  title: string
  description: string
  status: Status
  createdAt: Date
  updatedAt: Date
}

export interface TodoState {
  todos: Todo[]
}

export interface TodoStore {
  state: DeepReadonly<TodoState>
  getTodo: (id: number) => void
  addTodo: (todo: Partial<Todo>) => void
  updateTodo: (id: number, todo: Todo) => void
  deleteTodo: (id: number) => void
}