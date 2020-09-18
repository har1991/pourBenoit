import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { CvEntity } from './entities/cv.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CvDto } from './cvDto/cvDto';
import { updateCvDto } from './cvDto/updateCvDto';

@Injectable()
export class CvService {
    
    constructor( 
        @InjectRepository(CvEntity)
        private cvRepositry : Repository<CvEntity> ){}

        async getCvs(): Promise<CvEntity[]>{
            return await this.cvRepositry.find() ;
        }
        async addCv(cv : CvDto): Promise<CvEntity>{
            return await this.cvRepositry.save(cv);
        }
        async updateCv(id : number,cv : updateCvDto):Promise <CvEntity>{
            const  newCv = await this.cvRepositry.preload({  // With (preload) We will get the cv using it's id and then update  it  
              id ,
              ...cv  
            })//verifying whether the cv we are targeting exist or not
            if(!newCv){
                throw new NotFoundException(`Le Cv avece le id :${id} n'existe pas `);
            }
            // with save we will save all what we did (in this case (update))
            return await this.cvRepositry.save(newCv)
        }
        async update2Cv(updateCriterai, cv :updateCvDto){
            return this.cvRepositry.update(updateCriterai , cv);
        }
        async removeCv(id:number) {
            const cvToRomove = await this.cvRepositry.findOne(id);
            if(!cvToRomove){
                throw new NotFoundException(`Le Cv avece le id :${id} n'existe pas `);
            }
            return await this.cvRepositry.remove(cvToRomove);
        }
}
