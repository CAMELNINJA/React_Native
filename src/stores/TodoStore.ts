import { makeAutoObservable } from "mobx";
import { Todo } from "../models/Todo";

class TodoStore {
    todos: Todo[] = [
        {
            id: "3432",
            text: "sdfsd",
            isDone: false
        }
    ];

    constructor() {
        makeAutoObservable(this)
    }

    addTask(task: Todo) {
        if(task) this.todos.push(task)
    }

    removeTask(id: string) {
        this.todos = this.todos.filter((item: Todo) => item.id !== id)
    }

    completeTask(id: string) {
        this.todos = this.todos.map((item:Todo) => (item.id === id ? {...item, isDone: !item.isDone} : item))
    }
}

export default new TodoStore()