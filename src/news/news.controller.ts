import {Controller, Get, Post, Body, Patch, Param, Delete} from '@nestjs/common';
import {NewsService} from './news.service';
import {CreateNewsDto} from './dto/create-news.dto';
import {UpdateNewsDto} from './dto/update-news.dto';
import {CreateCommentDto} from "./dto/create-comment.dto";
import {UpdateCommentDto} from "./dto/update-comment.dto";
import {Public} from "../decorators/public.decorator";
import {Admin} from "../decorators/admin.decorator";

@Controller('news')
export class NewsController {
    constructor(private readonly newsService: NewsService) {
    }

    @Post()
    @Admin()
    create(@Body() createNewsDto: CreateNewsDto) {
        return this.newsService.create(createNewsDto);
    }

    @Post("comment")
    @Public()
    createComment(@Body() createCommentDto: CreateCommentDto) {
        return this.newsService.createComment(createCommentDto);
    }

    @Post("/comment/:id")
    @Public()
    createCommentToComment(@Param('id') id: string, @Body() createCommentDto: CreateCommentDto) {
        return this.newsService.createCommentToComment(+id, createCommentDto);
    }

    @Get()
    @Public()
    findAll() {
        return this.newsService.findAll();
    }

    @Get('pop')
    @Public()
    findPop() {
        return this.newsService.findAll();
    }

    @Get(':id')
    @Public()
    findOne(@Param('id') id: string) {
        return this.newsService.findOne(+id);
    }

    @Patch(':id')
    @Public()
    update(@Param('id') id: string, @Body() updateNewsDto: UpdateNewsDto) {
        return this.newsService.update(+id, updateNewsDto);
    }

    @Patch('/comment/:id')
    @Public()
    updateComment(@Param('id') id: string, @Body() updateCommentDto: UpdateCommentDto) {
        return this.newsService.updateComment(+id, updateCommentDto);
    }

    @Delete(':id')
    @Public()
    remove(@Param('id') id: string) {
        return this.newsService.remove(+id);
    }
}
