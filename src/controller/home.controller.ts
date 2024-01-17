import { Controller, Get } from '@midwayjs/core';
import { InjectEntityManager } from '@midwayjs/mikro';
import { EntityManager } from '@mikro-orm/core';
import { Book } from '../entity/book.entity';
@Controller('/')
export class HomeController {
  
  @InjectEntityManager()
  em: EntityManager;

  @Get('/')
  async home() {
    return await this.em.findAll(Book);
  }
}
