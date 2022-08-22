import {IsNumber, IsString, IsPositive, MinLength, IsNumberString, IsArray} from "class-validator";

export class CreateCommentDto {

    @IsNumberString()
    newsId: number;

    @IsString()
    @MinLength(10)
    text: string;

    @IsArray()
    @IsString()
    thumbnail_comments: string[];
}
