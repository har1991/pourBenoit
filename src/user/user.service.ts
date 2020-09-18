import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { userDto } from './userDto/userDto';

@Injectable()
export class UserService {

    constructor( 
        @InjectRepository(UserEntity)
        private userRepositry : Repository<UserEntity> ){}

        async getUsers(): Promise<UserEntity[]>{
            return await this.userRepositry.find() ;
        }
        async getUserById(id: number) :Promise <UserEntity>{
            const user = await this.userRepositry.findOne(id)
            if (!user){
                throw new NotFoundException(`Le Utilisateur avece le id :${id} n'existe pas`);
        }
        return user ; 
        }
        async addUser(user : userDto  ){
            return await this.userRepositry.save(user );
        }
        async deleteUser(id: number){
            const user = await this.getUserById(id);
            return await this.userRepositry.remove(user);
        }
        async updateUser(id : number , user : userDto){
            const  updateUser = await this.userRepositry.preload({  // With (preload) We will get the cv using it's id and then update  it  
            id ,
            ...user  
          })//verifying whether the cv we are targeting exist or not
                if(!updateUser){
                    throw new NotFoundException(`Le Utilisateur avece le id :${id} n'existe pas `);
        }
            return await this.userRepositry.save(updateUser);
        }
        
}
