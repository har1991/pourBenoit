
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
           Min} from 'class-validator';


import { Type } from "class-transformer";

export class CvDto{
    
    @Type(()=>Number)
    id : number ;

    @IsNotEmpty()  
    @IsString()
    @MaxLength(30)
    @MinLength(3)
    nom : string ;
    //@IsOptional()
    @IsString()
    description : string ;
    
    @IsNotEmpty()
    @Max(100)
    @Min(5)
    prix : number ; 

}