import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { UserEntity } from "src/user/entities/user.entity";

@Entity('nationalite')
export class NationaliteEntity {
    @PrimaryGeneratedColumn()
    id: number ; 
    @Column({
    length :50
    })
    nom : string  ;
    @OneToMany(
        type => UserEntity,
        (user)=> user.nationalite ,
        {
            
            
        }
    )
    users : UserEntity;
}
