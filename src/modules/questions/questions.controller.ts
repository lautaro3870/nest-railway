import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { Put } from '@nestjs/common/decorators';
import { ApiTags } from '@nestjs/swagger';
import { Question } from './entities/question.entity';
import { QuestionsService } from './questions.service';
import { Category } from '../category/entities/category.entity';

@ApiTags('questions')
@Controller('questions')
export class QuestionsController {
  constructor(private readonly questionService: QuestionsService) {}

  @Post()
  create(@Body() cuerpo: Question): Promise<Question> {
    return this.questionService.create(cuerpo);
  }

  @Patch()
  update(@Body() cuerpo: Question) {
    return this.questionService.update(cuerpo);
  }

  @Get()
  getAll(): Promise<Question[]> {
    return this.questionService.getAll();
  }

  @Get("categories")
  getAllCategories(): Promise<Category[]> {
    return this.questionService.getCategories();
  }

  @Get(':id')
  getOne(@Param('id') id: number): Promise<Question[]> {
    return this.questionService.getOne(id);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<Question[]> {
    return this.questionService.delete(id);
  }
}
