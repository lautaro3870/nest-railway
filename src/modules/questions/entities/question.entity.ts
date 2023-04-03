/* eslint-disable prettier/prettier */
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Category } from '../../category/entities/category.entity';

@Entity()
export class Question {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column()
  @ApiProperty()
  title: string;

  @Column()
  @ApiProperty()
  text: string;

  //una pregunta puede tener muchas categorias
  @ManyToMany(() => Category, (category) => category.questions, {
    cascade: true,
    eager: true,
  })
  @JoinTable({
    name: 'questionxcategoria',
    joinColumn: {
      name: 'question_id',
    },
    inverseJoinColumn: {
      name: 'category_id',
    },
  })
  @ApiProperty()
  categories: Category[];
}
