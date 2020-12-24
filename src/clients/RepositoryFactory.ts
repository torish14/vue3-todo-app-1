import { TodoClientInterface } from './TodoClient/types'
import { TodoClient } from '@/clients/TodoClient'
import { MockTodoClient } from '@/clients/TodoClient/mock'

export const TODOS = 'todos'

export interface Repositories {
  [TODOS]: TodoClientInterface
}

export default {
  [TODOS]:
    process.env.NODE_ENV === 'mock' ? new MockTodoClient() : new TodoClient(),
} as Repositories
