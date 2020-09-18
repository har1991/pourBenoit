import { Controller, Post, Body, Get, Param,ParseIntPipe, Delete, Patch, ValidationPipe } from '@nestjs/common';
import { userDto } from './userDto/userDto';
import { UserEntity } from './entities/user.entity';
import { UserService } from './user.service';


@Controller('user')
export class UserController {
    constructor(private readonly userService : UserService ){}
 
    @Get()

    async getUsers() : Promise<UserEntity[]>  {
        return this.userService.getUsers() ;
    }
    
   @Post()
        async addUser (@Body(new ValidationPipe({ transform : true})) userDto: userDto , ): Promise<UserEntity>{
            console.log(userDto);
            return await this.userService.addUser(userDto) ;
       
    }
    @Get(':id')
        async getUserById(
            @Param('id', ParseIntPipe)id:number) :Promise<UserEntity>{
            
        return await this.userService.getUserById(id)   
    }
    @Delete(':id')
        deleteUser(@Param('id', ParseIntPipe)id:number){
        return this.userService.deleteUser(id);
   }
   @Patch(':id')
   async updateUser(
    @Body() updateUser:userDto,
    @Param('id',ParseIntPipe)id:number){
        return await this.userService.updateUser(id ,updateUser );
    }
}
