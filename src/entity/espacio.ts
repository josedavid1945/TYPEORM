import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Cliente {
  @PrimaryGeneratedColumn()
  id_espacio: number;

  @Column()
  numero: number;

  @Column()
  disponible: boolean;
}
