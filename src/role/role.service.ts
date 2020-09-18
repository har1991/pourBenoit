import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoleEntity } from './role.entity';
import { Repository } from 'typeorm';
import { roleDto } from './roleDto';
import { async } from 'rxjs';

@Injectable()
export class RoleService {
    constructor( 
        @InjectRepository(RoleEntity)
        private roleRepositry : Repository<RoleEntity> ){}

  async getRols(): Promise<RoleEntity[]>{
      return this.roleRepositry.find()
  }
  async addRole(role: roleDto){
      return await this.roleRepositry.save(role)
  }
  async getRoleById(id : number) : Promise <RoleEntity>{
        const role =  await this.roleRepositry.findOne(id)
        if (!role) {
            throw new NotFoundException(`Le Role avece le id :${id} n'existe pas `);
    }
return role ;
       }
  
async deleteRole(id : number) {
    const deleteRole = await this.getRoleById(id)
    return await this.roleRepositry.remove(deleteRole)
}


}
