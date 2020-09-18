import { IsString,
    IsInt,
     IsNotEmpty,
      IsOptional,
       MinLength,
        MaxLength,
         IsEmail,
          IsDate,
           IsArray, 
           isNotEmpty,
           MAX,
           Max,
           Min,
           maxLength,
           MaxDate} from 'class-validator';


import { Type, Transform } from "class-transformer";
import { NationaliteEntity } from 'src/nationalite/entities/nationalite.entity';
import { RoleEntity } from 'src/role/role.entity';


export class userDto{
   
    id: number ; 

    @IsNotEmpty()
    @IsString()
    @MaxLength(30)
    @MinLength(4)
    nom : string ;

    @IsString()
    @MaxLength(30)
    @MinLength(4)
    prenom : string ;

    @IsEmail()
    @IsNotEmpty()
    email : string;

    @IsString()
    @MaxLength(30)
    @MinLength(4)
    login : string;

    @IsString()
    motdepasse : string ;

    @IsString()
    sexe : string ;

    @MaxDate(new Date("2017-11-10"))
    datedenaissance :Date ;
    nationalite : NationaliteEntity ;
    
    @Transform(roleIds=>roleIds.map(id => ({
        id 
    })))
    roles :Partial<RoleEntity>[];
    
}