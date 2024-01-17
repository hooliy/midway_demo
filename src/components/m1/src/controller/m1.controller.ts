import { Controller, Get } from '@midwayjs/core';
import { InjectEntityManager } from '@midwayjs/mikro';
import { EntityManager } from '@mikro-orm/core';
import { User } from '../entity/user.entity';
@Controller('/m1')
export class HomeController {

  @InjectEntityManager()
  em: EntityManager;

  @Get('/')
  async home() {
    return await this.em.findAll(User);
  }
}
