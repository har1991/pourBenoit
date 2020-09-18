import { Controller, Get, Post, Body, ParseIntPipe, Param, Delete, Patch } from '@nestjs/common';
import { NationaliteService } from './nationalite.service';
import { NationaliteEntity } from './entities/nationalite.entity';
import { NationaliteDto } from './nationaliteDto/nationlaiteDto';

@Controller('nationalite')
export class NationaliteController {

    constructor(private readonly nationaliteService : NationaliteService ){

       
        
    }
    @Get()
    async getAllNationalaties(): Promise<NationaliteEntity[]>{
        return await this.nationaliteService.getNationalities();
    }
    @Get(':id')
    async getNationaliteById(
    @Param('id', ParseIntPipe)id:number) :Promise<NationaliteEntity>{
        console.log(id)
        return await this.nationaliteService.getNationaliteById(id)   
    }

   @Post()
   async addNationalite(@Body()nationalite:NationaliteDto){
       return await this.nationaliteService.addNationalite(nationalite);
   }

   @Delete(':id')
   deleteNationalite(@Param('id', ParseIntPipe)id:number){
       return this.nationaliteService.deleteNatonalite(id);
   }
 
   @Patch(':id')
   async updateNationalite(
    @Body() updateNationalite:NationaliteDto,
    @Param('id',ParseIntPipe)id:number){
        return await this.nationaliteService.updateNationalite(id ,updateNationalite );
    }
    
   
    
}
