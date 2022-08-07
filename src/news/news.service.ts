import {Injectable, NotFoundException} from '@nestjs/common';
import {CreateNewsDto} from './dto/create-news.dto';
import {UpdateNewsDto} from './dto/update-news.dto';
import {News} from './entities/news.entity';
import {CreateCommentDto} from "./dto/create-comment.dto";
import {Comment} from "./entities/comment.entity";

@Injectable()
export class NewsService {

    private news: News[] = [
        {
            id: 1,
            author: "Jenya",
            title: "title",
            text: "text",
            comments: [
                {
                    Id: 1,
                    author: "Jenya",
                    text: "text",
                    date: "2022-08-04T17:59:30.132Z"
                }
            ],
            date: "2022-08-04T17:57:30.132Z"
        },
        {
            id: 2,
            author: "Jenya",
            title: "title2",
            text: "text2",
            comments: [],
            date: "2022-08-04T17:57:30.132Z"
        }
    ];

    create(createNewsDto: CreateNewsDto) {
        const news: News = {
            // ...createNewsDto,
            id: this.news.length + 1,
            author: "Jenya",
            title: createNewsDto.title,
            text: createNewsDto.text,
            comments: [],
            date: new Date().toUTCString(),
        };
        this.news.push(news);
    }

    createComment(createCommentDto: CreateCommentDto) {
        const newsId = createCommentDto.newsId;
        const news = this.findOne(newsId);

        const comment: Comment = {
            // ...createNewsDto,
            Id: news.comments.length + 1,
            author: "Jenya",
            text: createCommentDto.text,
            date: new Date().toUTCString(),
        };
        this.news[newsId - 1].comments.push(comment);
    }

    findAll() {
        return this.news;
    }

    findOne(id: number) {
        const news = this.news.find((news) => news.id === id);

        if (!news) {
            throw new NotFoundException();
        }

        return news;
    }

    update(id: number, updateNewsDto: UpdateNewsDto) {
        const news = this.news.find((news) => news.id === id);

        if (!news) {
            throw new NotFoundException();
        }

        this.news[id - 1].text = updateNewsDto.text;
    }

    remove(id: number) {
        return `This action removes a #${id} news`;
    }
}
