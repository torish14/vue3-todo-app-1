import { Todo } from '@/store/todo/types'

export interface TodoClientInterface {
  getAll(): Promise<Todo[]>

  get(id: number): Promise<Todo>

  create(params: Partial<Todo>): Promise<Todo>

  update(id: number, todo: Todo): Promise<Todo>

  delete(id: number): Promise<void>
}
