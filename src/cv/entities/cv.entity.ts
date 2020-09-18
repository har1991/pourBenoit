import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";



@Entity('cv')
export class CvEntity {
    
    @PrimaryGeneratedColumn()
    id : number ;  
    @Column({
        name : 'nom' ,
        length : 50
    })
    nom : string ;
    @Column()
    description : string ;
    @Column()
    prix : number ; 


}
