import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommentsModule } from './comments/comments.module';
import { NewsModule } from './news/news.module';

@Module({
  imports: [NewsModule, CommentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
