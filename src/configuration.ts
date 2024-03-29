import { Configuration, App, MidwayConfigService, Inject } from '@midwayjs/core';
import * as koa from '@midwayjs/koa';
import * as validate from '@midwayjs/validate';
import * as info from '@midwayjs/info';
import { join } from 'path';
// import { DefaultErrorFilter } from './filter/default.filter';
// import { NotFoundFilter } from './filter/notfound.filter';
import { ReportMiddleware } from './middleware/report.middleware';
import * as mikro from '@midwayjs/mikro';
import * as m1 from './components/m1/src';

@Configuration({
  imports: [
    koa,
    validate,
    mikro,
    m1,
    {
      component: info,
      enabledEnvironment: ['local'],
    },
  ],
  importConfigs: [join(__dirname, './config')],
})
export class MainConfiguration {
  @App('koa')
  app: koa.Application;

  @Inject()
  configService: MidwayConfigService;


  async onReady() {

    // 这种方法也不行
    // const config = this.configService.getConfiguration()
    // const customEntities = this.configService.getConfiguration('mikro.dataSource.default1.entities')
    // console.log(customEntities)
    // config.mikro.dataSource['default']['entities'].push(...customEntities);
    // console.log(config.mikro.dataSource['default']['entities'])

    // add middleware
    this.app.useMiddleware([ReportMiddleware]);
    // add filter
    // this.app.useFilter([NotFoundFilter, DefaultErrorFilter]);
  }
}
