import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Category } from '../category/entities/category.entity';
import { Question } from './entities/question.entity';

@Injectable()
export class QuestionsService {
  constructor(
    @InjectRepository(Question)
    private readonly questionRepo: Repository<Question>,
    @InjectRepository(Category)
    private readonly categoryRepo: Repository<Category>,
  ) {}

  async getCategories(): Promise<Category[]> {
    return await this.categoryRepo.find();
  }

  // async create(cuerpo: Question): Promise<Question> {
  //   let q = await this.questionRepo.create(cuerpo);
  //   q = await this.questionRepo.save(q);
  //   const a = await this.questionRepo.findOne({
  //     relations: ['category'],
  //     where: { categories: q.categories },
  //   });
  //   for (const i of a) {
  //     i.categories.push(q);
  //   }
  // }


  

  async getAll(): Promise<Question[]> {
    return await this.questionRepo.find({
      relations: ['categories'],
      select: {
        id: true,
        text: true,
        title: true,
        categories: {
          name: true,
        },
      },
    });
  }

  async getOne(id: number): Promise<Question[]> {
    return await this.questionRepo.find({
      where: {
        id: id,
      },
      relations: ['categories'],
      select: {
        id: true,
        text: true,
        title: true,
        categories: {
          id: true,
          name: false,
        },  
      },
    });
  }

  async create({ text, title, categories }: Question) {
    const question = this.questionRepo.create({
      text: text,
      title: title,
    });

    console.log(categories);

    const categories2 = await this.categoryRepo.findBy({
      id: In(categories),
    });

    //const categories2 = await this.categoryRepo.findBy({ id: categoryId });
    question.categories = categories2;
    return this.questionRepo.save(question);
  }

  async delete(id: number): Promise<Question[]> {
    const question = await this.questionRepo.findBy({
      id: id,
    });

    return this.questionRepo.remove(question);
  }

  async update({ id, text, title, categories }: Question) {
    // const a = this.categoryRepo.remove(categories);
    // console.log(a);

    const question = await this.questionRepo.preload({
      id: id,
      text: text,
      title: title,
    });

    await this.questionRepo.getId(question);

    console.log(categories);
    console.log(text);
    console.log(title);
    console.log(id);

    const categories2 = await this.categoryRepo.findBy({
      id: In(categories),
    });

    //const categories2 = await this.categoryRepo.findBy({ id: categoryId });
    question.categories = categories2;
    return this.questionRepo.save(question);
  }
}
