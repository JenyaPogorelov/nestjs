import {Injectable, NotFoundException} from '@nestjs/common';
import {CreateNewsDto} from './dto/create-news.dto';
import {UpdateNewsDto} from './dto/update-news.dto';
import {News} from './entities/news.entity';

@Injectable()
export class NewsService {

    private news: News[] = [
        {
            id: 1,
            author: "Jenya",
            title: "title",
            text: "text",
            date: "2022-08-04T17:57:30.132Z"
        },
        {
            id: 2,
            author: "Jenya",
            title: "title2",
            text: "text2",
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
            date: new Date().toUTCString(),
        };
        // this.news.push(news);
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
        return `This action updates a #${id} news`;
    }

    remove(id: number) {
        return `This action removes a #${id} news`;
    }
}
