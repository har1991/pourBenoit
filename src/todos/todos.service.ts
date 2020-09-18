import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './interfaces/todo.interface';
import {ToDoDto} from '../todos/dto/ToDoDto'
import { title } from 'process';

@Injectable()
export class TodosService {
   
    todos :Todo[] = [
         {
        id :1 ,
        title : " hello all",
        description : "Creat a new service",
        done : false
    },
    {
        id :2 ,
        title : "hello 2",
        description : "Creat a 2 service",
        done : true
    }
];
    findAll():Todo[]{
        //console.log(this.todos);
        return this.todos;
    }
    findToDoById(id:string){
        return this.todos.find(todo => todo.id === Number(id))
    }
    create(todo :ToDoDto){
        this.todos = [...this.todos,todo as Todo ];
    }
    delete( id : string){
        
        const noOfTodosBeforeDelete = this.todos.length ;
        this.todos = [...this.todos.filter( t => t.id !== +id)];
        if (noOfTodosBeforeDelete > this.todos.length){
            return { deletedTodos : 1 , nbTodos : this.todos.length}
        } 
        return { deletedTodos : 0 , nbTodos : this.todos.length}
    }
    update(id: string , todo :ToDoDto){
        const todoUpdate = this.todos.find(td => td.id === +id);
        if (!todoUpdate){
            return new NotFoundException('NOT Found');
        }
        if (todo.hasOwnProperty('done')){
            todoUpdate.done = todo.done ;
        }
        if (todo.title){
            todoUpdate.title =todo.title ;
        }
        if (todo.description){
            todoUpdate.description = todo.description;
        }
        const updatedToDos = this.todos.map(t=> t.id !== +id ? t: todoUpdate);
        this.todos = [...updatedToDos];
        return  { updatedToDos : 1 , todo : todoUpdate};
    }

}
