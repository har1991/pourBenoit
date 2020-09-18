import { Module } from '@nestjs/common';
import { NationaliteService } from './nationalite.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NationaliteEntity } from './entities/nationalite.entity';
import { NationaliteController } from './nationalite.controller';

@Module({
  imports :[TypeOrmModule.forFeature([NationaliteEntity])] ,
  controllers: [NationaliteController],
  providers: [NationaliteService]
})
export class NationaliteModule {}
