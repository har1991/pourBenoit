import { Controller, Get ,Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo } from './interfaces/todo.interface';
import {ToDoDto} from '../todos/dto/ToDoDto'

@Controller('todos')
export class TodosController {
    constructor(private readonly todoService : TodosService){
    }
    @Get()
    findAll():Todo[]{
        //console.log(this.todoService.findAll());
        return this.todoService.findAll();
    }
    @Get(":id")
    getById(@Param('id') id: string) {
        
        return this.todoService.findToDoById(id)
    }
    @Post()
    creatTodo(@Body()newTodo : ToDoDto){
        //console.log("new todo",newTodo);
        this.todoService.create(newTodo);
    }
    @Patch(':id')
    updateToDo(@Param('id') id : string , @Body() todo : ToDoDto) {
        return  this.todoService.update(id, todo)
    }
    @Delete(':id')
    deleteTodo(@Param('id')id : string) {
        return this.todoService.delete(id);
    }

    
}
