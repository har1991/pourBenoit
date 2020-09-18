import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';
import {ConfigModule} from '@nestjs/config'
import {TypeOrmModule } from '@nestjs/typeorm'
import { PersonModule } from './person/person.module';
import { EntitiesModule } from './entities/entities.module';
import { CvModule } from './cv/cv.module';
import { UserModule } from './user/user.module';
import { NationaliteController } from './nationalite/nationalite.controller';
import { NationaliteModule } from './nationalite/nationalite.module';
import * as dotenv from 'dotenv'
import { UserController } from './user/user.controller';
import { NationaliteService } from './nationalite/nationalite.service';
import { RoleService } from './role/role.service';
import { RoleModule } from './role/role.module';

dotenv.config();
@Module({
  imports: [TodosModule,
    ConfigModule.forRoot( {
      isGlobal : true 
    }),
    TypeOrmModule.forRoot(
      {
        
        type: 'postgres',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT) ,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        entities: ["dist/**/*.entity{.ts,.js}"],
        synchronize: true,
      }
    ),
    PersonModule,
    EntitiesModule,
    CvModule,
    UserModule,
    NationaliteModule,
    RoleModule],
  controllers: [AppController ],
  providers: [AppService],
})
export class AppModule {}
