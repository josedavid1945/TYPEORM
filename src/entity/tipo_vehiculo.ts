import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class tipo_vehiculo {
  @PrimaryGeneratedColumn()
  id_tipoVehiculo: number;

  @Column()
  Categoria: string;

  @Column()
  descripcion: string;
}