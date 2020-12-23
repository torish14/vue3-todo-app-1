import { Todo } from '@/store/todo/types'
import { TodoClientInterface } from './types'

const mockTodo: Todo[] = [
  {
    id: 1,
    title: 'todo1',
    description: '1つ目',
    status: 'waiting',
    createdAt: new Date('2020-12-01'),
    updatedAt: new Date('2020-12-01'),
  },
  {
    id: 2,
    title: 'todo2',
    description: '2つ目',
    status: 'waiting',
    createdAt: new Date('2020-12-02'),
    updatedAt: new Date('2020-12-02'),
  },
  {
    id: 3,
    title: 'todo3',
    description: '3つ目',
    status: 'working',
    createdAt: new Date('2020-12-03'),
    updatedAt: new Date('2020-12-04'),
  },
]

export class TodoClient implements TodoClientInterface {
  async getAll() {
    return Promise.resolve(mockTodo)
  }

  get(id: number) {
    const todo = mockTodo.find((todo) => todo.id === id)
    if (todo === undefined) {
      return Promise.reject(new Error(`id: ${id} is not found`))
    }

    return Promise.resolve(todo)
  }

  create(params: Partial<Todo>) {
    const todo = this.intitializeTodo(params)
    return Promise.resolve(todo)
  }

  update(id: number, todo: Todo) {
    todo.updatedAt = new Date()
    return Promise.resolve(todo)
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  delete(id: number) {
    return Promise.resolve()
  }

  intitializeTodo(todo: Partial<Todo>) {
    const date = new Date()
    todo.id = date.getTime()
    todo.createdAt = date
    todo.updatedAt = date
    return todo as Todo
  }
}
