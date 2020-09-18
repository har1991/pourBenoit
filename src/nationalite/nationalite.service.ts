import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { userDto } from 'src/user/userDto/userDto';
import { NationaliteEntity } from './entities/nationalite.entity';
import { Repository } from 'typeorm';
import { NationaliteDto } from './nationaliteDto/nationlaiteDto';

@Injectable()
export class NationaliteService {
    constructor( 
        @InjectRepository(NationaliteEntity)
        private nationaliteRepositry : Repository<NationaliteEntity>){}

        async getNationalities():Promise<NationaliteEntity[]>{
            return await this.nationaliteRepositry.find();
        }
        async addNationalite(nationalite :NationaliteDto ){
            return await this.nationaliteRepositry.save(nationalite);
        }
        
       async getNationaliteById(id : number): Promise<NationaliteEntity>{
       
           const nationalite = await this.nationaliteRepositry.findOne(id);
            if (!nationalite){
                throw new NotFoundException(`Le Nationalite avece le id :${id} n'existe pas `);
            }
           return nationalite ;
          
       }
       async deleteNatonalite(id : number ) {
           const NationaliteToDelete = await this.getNationaliteById(id);
        return this.nationaliteRepositry.remove(NationaliteToDelete);
       }
       async updateNationalite(id : number , nationalite : NationaliteDto) {
        const  updateNationalite = await this.nationaliteRepositry.preload({  // With (preload) We will get the cv using it's id and then update  it  
        id ,
        ...nationalite  
      })//verifying whether the cv we are targeting exist or not
            if(!updateNationalite){
                throw new NotFoundException(`Le Cv avece le id :${id} n'existe pas `);
    }
        return await this.nationaliteRepositry.save(updateNationalite);
       }
}
