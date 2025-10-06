import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Cliente {
  @PrimaryGeneratedColumn()
  id_seccion: number;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;
}
