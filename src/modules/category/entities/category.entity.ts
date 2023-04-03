/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';

import { Question } from 'src/modules/questions/entities/question.entity';

@Entity()
export class Category {
  //relacion bi-direccional
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Question, (question) => question.categories)
  questions: Question[];
}
