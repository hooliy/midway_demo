import { LoadStrategy, defineConfig } from "@mikro-orm/core";
import { SqliteDriver } from "@mikro-orm/sqlite";
import { User } from "./entity/user.entity";

export default defineConfig({
    entities: [
        User,
    ],
    dbName: "./test1.sqlite",
    driver: SqliteDriver,       // 这里使用了 sqlite 做示例
    debug: true,
    // allowGlobalContext: true,
    timezone: '+08:00',
    loadStrategy: LoadStrategy.JOINED
    // forceUtcTimezone: true, //可以强制将日期保存在不带时区的日期
    // driverOptions: { connection: { timezone: '+08:00' } },
});