import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {NewsModule} from './news/news.module';
import {APP_GUARD} from "@nestjs/core";
import {AccessGuard} from "./guards/access/access.guard";
import {MulterModule} from "@nestjs/platform-express";

@Module({
    imports: [NewsModule],
    controllers: [AppController],
    providers: [
        AppService,
        {
            provide: APP_GUARD,
            useClass: AccessGuard,
        },
    ],
})
export class AppModule {
}
