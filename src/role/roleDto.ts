
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
export  class roleDto {
    id : number ;
   
    @MaxLength(25)
    @MinLength(3)
    @IsString()
    @IsNotEmpty()
    role : string ;
    //user :Partial<UserEntity>[];
    
}