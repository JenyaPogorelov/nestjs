import {Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile} from '@nestjs/common';
import {NewsService} from './news.service';
import {CreateNewsDto} from './dto/create-news.dto';
import {UpdateNewsDto} from './dto/update-news.dto';
import {CreateCommentDto} from "./dto/create-comment.dto";
import {UpdateCommentDto} from "./dto/update-comment.dto";
import {Public} from "../decorators/public.decorator";
import {Admin} from "../decorators/admin.decorator";
import {FileInterceptor} from "@nestjs/platform-express";
import {diskStorage} from 'multer';
import {extname} from 'path';
import {TimeoutInterceptor} from "../interseptors/timeuot/timeout.interceptor";

@Controller('news')
export class NewsController {
    constructor(private readonly newsService: NewsService) {
    }

    @Post()
    @Admin("Admin")
    @UseInterceptors(FileInterceptor('file',
        {
            storage: diskStorage({
                destination: './uploads/thumbnails',
                filename: (req, file, cb) => {
                    const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
                    cb(null, `${randomName}${extname(file.originalname)}`)
                }
            }),
        }),
    )
    @UseInterceptors(TimeoutInterceptor)
    create(@UploadedFile() file: Express.Multer.File, @Body() createNewsDto: CreateNewsDto) {
        return this.newsService.create({...createNewsDto, thumbnail: `thumbnails/${file.filename}`});
    }

    @Post("comment")
    @Public("User")
    @UseInterceptors(FileInterceptor('file',
        {
            storage: diskStorage({
                destination: './uploads/thumbnails_comments',
                filename: (req, file, cb) => {
                    const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
                    cb(null, `${randomName}${extname(file.originalname)}`)
                }
            }),
        }),
    )
    createComment(@UploadedFile() file: Express.Multer.File, @Body() createCommentDto: CreateCommentDto) {
        return this.newsService.createComment({...createCommentDto, thumbnail_comments: `thumbnails_comments/${file.filename}`});
    }

    @Post("/comment/:id")
    @Public("User")
    @UseInterceptors(FileInterceptor('file',
        {
            storage: diskStorage({
                destination: './uploads/thumbnails_comments',
                filename: (req, file, cb) => {
                    const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
                    cb(null, `${randomName}${extname(file.originalname)}`)
                }
            }),
        }),
    )
    createCommentToComment(@UploadedFile() file: Express.Multer.File, @Param('id') id: string, @Body() createCommentDto: CreateCommentDto) {
        return this.newsService.createCommentToComment(+id, {...createCommentDto, thumbnail_comments: `thumbnails_comments/${file.filename}`});
    }

    @Get()
    @Public("User")
    findAll() {
        return this.newsService.findAll();
    }

    @Get('pop')
    @Public("User")
    findPop() {
        return this.newsService.findAll();
    }

    @Get(':id')
    @Public("User")
    findOne(@Param('id') id: string) {
        return this.newsService.findOne(+id);
    }

    @Patch(':id')
    @Public("User")
    update(@Param('id') id: string, @Body() updateNewsDto: UpdateNewsDto) {
        return this.newsService.update(+id, updateNewsDto);
    }

    @Patch('/comment/:id')
    @Public("User")
    updateComment(@Param('id') id: string, @Body() updateCommentDto: UpdateCommentDto) {
        return this.newsService.updateComment(+id, updateCommentDto);
    }

    @Delete(':id')
    @Public("User")
    remove(@Param('id') id: string) {
        return this.newsService.remove(+id);
    }
}
