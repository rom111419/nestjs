import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Text {
  @PrimaryGeneratedColumn() id: number;
  @Column('text') value: string;
}
