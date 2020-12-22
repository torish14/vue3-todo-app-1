import { Todo } from '@/store/todo/types'
import { TodoClientInterface } from './types'

export class TodoClient implements TodoClientInterface {
  getAll() {
    return Promise.resolve(
      Object.keys(localStorage).map((key) => {
        return JSON.parse(localStorage.getItem(key) as string) as Todo
      })
    )
  }

  get(id: number) {
    const item = localStorage.getItem(String(id))
    if (item === null) {
      return Promise.reject(new Error(`id: ${id} is not found`))
    }

    return Promise.resolve(JSON.parse(item) as Todo)
  }

  create(params: Partial<Todo>) {
    const todo = this.intitializeTodo(params)
    localStorage.setItem(String(todo.id), JSON.stringify(todo))
    return Promise.resolve(todo)
  }

  update(id: number, todo: Todo) {
    localStorage.removeItem(String(id))
    todo.updatedAt = new Date()
    localStorage.setItem(String(id), JSON.stringify(todo))
    return Promise.resolve(todo)
  }

  delete(id: number) {
    localStorage.removeItem(String(id))
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
