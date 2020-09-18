import { PrimaryGeneratedColumn, Column, Entity, Timestamp, ManyToOne, JoinColumn, ManyToMany, JoinTable } from "typeorm";

import { NationaliteEntity } from "src/nationalite/entities/nationalite.entity";
import { join } from "path";
import { RoleEntity } from "src/role/role.entity";
@Entity('users')
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number ; 
    @Column({
        length :50
    })
    nom : string  ;
    @Column()
    prenom : string ;
    @Column()
    email : string;
    @Column({
        unique:true
    })
    login : string;
    @Column()
    motdepasse : string ;
    @Column()
    sexe : string ;
    @Column()
    datedenaissance :Date ;
@ManyToMany(type => RoleEntity,role=> role.user ,
    {
        cascade: true,
        eager : true 
    })

roles : RoleEntity[] ;

    @ManyToOne( type => NationaliteEntity ,
        (nationalite) =>nationalite.users ,
        {
            cascade: true,
            eager : true 
        })
@JoinColumn
({
    name : "nationaliteid"
})
    nationalite : NationaliteEntity ;

}
