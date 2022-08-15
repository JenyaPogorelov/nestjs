import {IsNumber, IsString, IsPositive, MinLength, IsNumberString} from "class-validator";

export class CreateCommentDto {

    @IsNumberString()
    newsId: number;

    @IsString()
    @MinLength(10)
    text: string;

    thumbnail_comments: string;
}
