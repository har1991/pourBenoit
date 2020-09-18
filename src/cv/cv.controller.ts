import { Controller, Get, Post, Body, Patch, Param, ParseIntPipe, Delete } from '@nestjs/common';
import { CvService } from './cv.service';
import { CvEntity } from './entities/cv.entity';
import { CvDto } from './cvDto/cvDto';
import { updateCvDto } from './cvDto/updateCvDto';

@Controller('cv')
export class CvController {
    constructor(private readonly cvService : CvService ){}
    @Get()
    async getAllCvs(): Promise<CvEntity[]>{
        return await this.cvService.getCvs();
    }
    @Post()
    async addcv (@Body() cvDto: CvDto): Promise<CvEntity>{
       return await this.cvService.addCv(cvDto);
       
    }
    @Patch(':id')
    async updateCv(
    @Body() updateCv : updateCvDto , 
    @Param('id',ParseIntPipe)id:number){
        return await this.cvService.updateCv(id, updateCv) ;    
    }
    @Patch()
    async update2Cv(
    @Body() updateObject)  {
        const {updateCriteria , updateCvDto}=updateObject
        return await this.cvService.update2Cv(updateCriteria, updateCvDto) ;    
    }
    @Delete(':id')
    async removeCv(
        @Param('id', ParseIntPipe)id : number ) {
            return this.cvService.removeCv(id);
    }

}
