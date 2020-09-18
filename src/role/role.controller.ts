import { Controller, Get, Post, Body, ParseIntPipe, Param, Delete } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleEntity } from './role.entity';
import { roleDto } from './roleDto';

@Controller('role')
export class RoleController {
    constructor(private roleService : RoleService){

    }
    @Get()
    async getAllRols() : Promise<RoleEntity[]>{
        return await this.roleService.getRols()
    }
    @Post()
    async addRole(@Body()role: roleDto){
        return await this.roleService.addRole(role);
    }
    @Get(':id')
    async getRoleById(
    @Param('id', ParseIntPipe)id:number) :Promise<RoleEntity>{
        console.log(id)
        return await this.roleService.getRoleById(id)   
    }
    @Delete(':id')
        deleteUser(@Param('id', ParseIntPipe)id:number){
        return this.roleService.deleteRole(id);
   }
}
