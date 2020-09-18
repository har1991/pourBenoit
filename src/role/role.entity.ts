import { PrimaryGeneratedColumn, Entity, Column, ManyToOne, JoinTable, ManyToMany } from "typeorm";
import { type } from "os";
import { join } from "path";
import { UserEntity } from "src/user/entities/user.entity";
@Entity('role')
export class RoleEntity {
    @PrimaryGeneratedColumn()
    id : number ;
    @Column()
    role : string ;
    @ManyToMany(type => UserEntity,user=> user.roles)
    @JoinTable()
    user : UserEntity[] ;
}
